const { transporter, sender } = require("./mailtrap.config");
const { CONTACT_EMAIL_TEMPLATE } = require("./emailTemplates");

// Send contact form email
const sendContactEmail = async ({ email, subject, message }) => {
  try {
    const info = await transporter.sendMail({
      from: sender,
      to: "your_email@mailtrap.io", // replace with your Mailtrap inbox email
      subject: `[Portfolio Contact] ${subject}`,
      html: CONTACT_EMAIL_TEMPLATE({ email, subject, message }),
    });

    console.log("✅ Contact email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    throw new Error(`Failed to send contact email: ${error.message}`);
  }
};

module.exports = { sendContactEmail };
