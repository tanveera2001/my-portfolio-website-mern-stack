require('dotenv').config();
const sgMail = require("@sendgrid/mail");
const Contact = require("../models/contactModel");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const submitContactForm = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // 1. Save to MongoDB
    const newContact = new Contact({ email, subject, message });
    await newContact.save();

    // 2. Send Email to you
    const msg = {
      to: process.env.PORTFOLIO_EMAIL_TO,   // your email (set in .env)
      from: process.env.PORTFOLIO_EMAIL_FROM, // verified sender in SendGrid
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    };
    try {
      await sgMail.send(msg);
    } catch (emailError) {
      console.error("SendGrid Error:", emailError.response?.body || emailError);
    }

    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("SendGrid Error:", error);

    // Better SendGrid error handling
    if (error.response) {
      console.error(error.response.body);
    }

    res.status(500).json({ message: "Something went wrong. Try again later." });
  }
};

module.exports = { submitContactForm };
