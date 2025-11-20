from fastapi import FastAPI, APIRouter, File, UploadFile, Form
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact")
async def send_contact_form(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(""),
    hsn: str = Form(...),
    tsn: str = Form(...),
    message: str = Form(""),
    files: List[UploadFile] = File(default=[])
):
    """
    Contact form endpoint that sends email with attachments
    """
    try:
        # Get email configuration from environment
        email_host = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
        email_port = int(os.environ.get('EMAIL_PORT', '587'))
        email_user = os.environ.get('EMAIL_USER')
        email_password = os.environ.get('EMAIL_PASSWORD')
        email_recipient = os.environ.get('EMAIL_RECIPIENT')
        
        if not all([email_user, email_password, email_recipient]):
            logger.error("Email configuration missing in environment variables")
            return JSONResponse(
                status_code=500,
                content={"error": "Email configuration missing"}
            )
        
        # Create email message
        msg = MIMEMultipart()
        msg['From'] = email_user
        msg['To'] = email_recipient
        msg['Subject'] = f'Neue Anfrage von {name} - HSN/TSN: {hsn}/{tsn}'
        
        # Email body
        body = f"""
Neue Kundenanfrage über das Kontaktformular:

Name: {name}
E-Mail: {email}
Telefon/WhatsApp: {phone}
HSN: {hsn}
TSN: {tsn}

Nachricht:
{message}

---
Diese E-Mail wurde automatisch über das Kontaktformular auf autoteile-flott.de gesendet.
        """
        
        msg.attach(MIMEText(body, 'plain', 'utf-8'))
        
        # Attach files
        for file in files:
            if file.filename:
                # Read file content
                content = await file.read()
                
                # Create attachment
                part = MIMEBase('application', 'octet-stream')
                part.set_payload(content)
                encoders.encode_base64(part)
                part.add_header(
                    'Content-Disposition',
                    f'attachment; filename= {file.filename}'
                )
                msg.attach(part)
                
                logger.info(f"Attached file: {file.filename} ({len(content)} bytes)")
        
        # Send email
        logger.info(f"Connecting to SMTP server {email_host}:{email_port}")
        server = smtplib.SMTP(email_host, email_port)
        server.starttls()
        server.login(email_user, email_password)
        server.send_message(msg)
        server.quit()
        
        logger.info(f"Contact form email sent successfully to {email_recipient}")
        
        return JSONResponse(
            status_code=200,
            content={"message": "Email sent successfully"}
        )
        
    except Exception as e:
        logger.error(f"Error sending contact form email: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"error": f"Failed to send email: {str(e)}"}
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()