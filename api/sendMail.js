// /api/sendMail.js - Vercel Serverless Function for contact form
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { name, email, phone, hsn, tsn, message, attachments } = req.body || {};

    // Validation
    if (!name || !email || !hsn || !tsn) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create transporter from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 587),
      secure: (process.env.MAIL_SECURE === "true"), // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Process attachments: expect Base64 arrays [{ filename, content (base64) }, ...]
    const attachmentsProcessed = (attachments || []).map(a => ({
      filename: a.filename,
      content: Buffer.from(a.content, "base64")
    }));

    // Email body
    const emailBody = `
Neue Kundenanfrage über das Kontaktformular:

Name: ${name}
E-Mail: ${email}
Telefon/WhatsApp: ${phone || 'Nicht angegeben'}
HSN: ${hsn}
TSN: ${tsn}

Nachricht:
${message || 'Keine Nachricht'}

---
Diese E-Mail wurde automatisch über das Kontaktformular auf autoteile-flott.de gesendet.
    `;

    const mailOptions = {
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: `Neue Anfrage von ${name} - HSN/TSN: ${hsn}/${tsn}`,
      text: emailBody,
      attachments: attachmentsProcessed
    };

    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ ok: true, message: "Email sent successfully" });
    
  } catch (err) {
    console.error("sendMail error:", err);
    return res.status(500).json({ error: err?.message || "Server error" });
  }
}
