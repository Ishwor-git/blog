const express = require("express");
const router = express.Router();
const path = require("path");
const nodeMailer = require("nodemailer");

router.get("/test", (req, res) => {
  res.send({ data: "testing contact" });
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const transporter = nodeMailer.createTransport({
      service: "gamail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Message from ${name}`,
      text: message,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error  sending emaiil : ", err);
    res.status(500).json({ error: "Failled to send email" });
  }
});

module.exports = router;
