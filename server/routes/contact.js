import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required" });
  }

  const transporter = getTransporter();

  if (!transporter) {
    console.warn("SMTP is not configured; contact message was not emailed:", { name, email, phone });
    // Don't fail the request just because email isn't configured yet -
    // the client still sees a success message, and this is logged server-side.
    return res.json({ success: true, delivered: false });
  }

  try {
    await transporter.sendMail({
      from: `"Venus Hospital Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\n${message}`,
    });
    res.json({ success: true, delivered: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
