# Formspree Setup Guide for Autoteile Flott Contact Form

## Overview
Your contact form is fully functional and ready to connect to Formspree. This guide will walk you through the setup process step by step.

## What is Formspree?
Formspree is a form backend service that handles form submissions without requiring your own backend server. It sends form data directly to your email.

## Step-by-Step Setup Instructions

### Step 1: Create a Formspree Form
1. Log in to your Formspree account at [https://formspree.io](https://formspree.io)
2. Click on **"New Form"** button
3. Enter a name for your form (e.g., "Autoteile Flott Contact Form")
4. Click **"Create Form"**

### Step 2: Get Your Form Endpoint
After creating the form, Formspree will provide you with a unique form endpoint that looks like this:
```
https://formspree.io/f/YOUR_FORM_ID
```

For example: `https://formspree.io/f/xyzabc123`

**Important:** Copy this endpoint URL - you'll need it in the next step.

### Step 3: Configure the Form in Your Application

1. Open the file: `/app/frontend/src/components/ContactForm.jsx`

2. Find line 153 where it says:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

3. Replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/xyzabc123', {
   ```

### Step 4: Configure Email Notifications (Optional but Recommended)

In your Formspree dashboard:

1. Go to your form settings
2. Navigate to **"Notifications"** tab
3. Set the email address where you want to receive submissions (e.g., flott.autoteile@gmail.com)
4. Customize the email notification template if desired

### Step 5: Enable File Uploads (Important!)

Since your form includes file upload functionality:

1. In your Formspree dashboard, go to form settings
2. Navigate to **"Settings"** tab
3. Enable **"File Uploads"**
4. Set maximum file size (recommended: 10MB or higher for images)

### Step 6: Configure AJAX Submissions

Your form already uses AJAX submissions (which is set up correctly in the code). In Formspree:

1. Go to **"Settings"** → **"Advanced"**
2. Make sure **"AJAX submissions"** are enabled
3. Set CORS settings to allow requests from your domain

### Step 7: Test Your Form

1. After updating the form endpoint, restart your frontend:
   ```bash
   sudo supervisorctl restart frontend
   ```

2. Visit your website and navigate to the contact section
3. Fill out the form with test data:
   - Name: Test User
   - Email: your-test-email@example.com
   - Phone/WhatsApp: +49 123 456789
   - HSN: 1234
   - TSN: 567
   - Message: Test inquiry
   - Upload a test image (optional)

4. Click **"Anfrage absenden"**
5. You should see a success message
6. Check your email (the one configured in Formspree) for the submission

### Step 8: Verify Submissions

In your Formspree dashboard:
1. Go to **"Submissions"** tab
2. You should see your test submission with all the form data
3. If you uploaded a file, you'll see a download link for it

## Form Field Mapping

The form sends the following data to Formspree:

| Field Name | Description | Required |
|------------|-------------|----------|
| `name` | User's full name | No |
| `email` | User's email address | **Yes** |
| `phone` | Phone/WhatsApp number | No |
| `hsn` | HSN (4-digit vehicle key number) | **Yes** |
| `tsn` | TSN (3-digit vehicle key number) | **Yes** |
| `message` | User's inquiry message | No |
| `file` | Optional image attachment | No |

## Formspree Plans

- **Free Plan**: 50 submissions/month (good for testing)
- **Paid Plans**: Start at $10/month for 1,000 submissions

For a business like Autoteile Flott, we recommend starting with a paid plan to ensure all customer inquiries are received.

## Troubleshooting

### Issue: Form not submitting
**Solution:** 
- Check browser console for errors
- Verify the Formspree endpoint is correct
- Ensure AJAX submissions are enabled in Formspree

### Issue: File uploads not working
**Solution:**
- Enable file uploads in Formspree settings
- Verify file size is within limits
- Check that the file field name is correct (`file`)

### Issue: Not receiving email notifications
**Solution:**
- Check spam/junk folder
- Verify email address in Formspree notification settings
- Check Formspree submission logs to confirm receipt

### Issue: CORS errors
**Solution:**
- In Formspree settings, add your domain to allowed origins
- For development: `https://autoteile-form.preview.emergentagent.com`
- For production: Your actual domain

## Multi-Language Support

The form already includes full multi-language support for:
- 🇩🇪 German (Deutsch)
- 🇬🇧 English
- 🇭🇺 Hungarian (Magyar)
- 🇵🇱 Polish (Polski)

All form labels, placeholders, and messages will automatically translate based on the user's selected language.

## Additional Configuration (Optional)

### Custom Success/Error Messages
The form already has built-in success and error messages. To customize them:
1. Edit `/app/frontend/src/components/ContactForm.jsx`
2. Find the `texts` object (lines 21-98)
3. Modify the `success` and `error` text for each language

### Auto-Response Email
In Formspree settings:
1. Navigate to **"Autoresponder"** tab
2. Enable autoresponder
3. Customize the email template that will be sent to users after submission
4. Include your contact information and expected response time

### Spam Protection
Formspree includes built-in spam protection. For additional protection:
1. Enable **reCAPTCHA** in Formspree settings (recommended)
2. Set up honeypot fields (already handled by Formspree)

## Contact

If you need help with Formspree setup or have questions about the form implementation, please reach out.

---

**Last Updated:** January 24, 2025
**Form Version:** 1.0
**Framework:** React + Formspree
