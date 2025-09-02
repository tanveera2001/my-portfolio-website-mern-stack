const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");

// Load .env
dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Default sender
const sender = `"Portfolio Contact Form" <noreply@portfolio.com>`;

module.exports = {
  transporter,
  sender,
};
