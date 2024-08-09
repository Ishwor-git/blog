const express = require("express");
const router = express.Router();
const path = require("path");
// const nodeMailer = require("nodemailer");
const mg = require("mailgun-js");

router.get("/test", (req, res) => {
  res.send({ data: "testing contact" });
});

// router.get("/testCredentials", (req, res) => {
//   res.json({
//     username: process.env.EMAIL_USER,
//     password: process.env.EMAIL_PASSWORD,
//     contact_email: process.env.CONTACT_EMAIL,
//   });
// });
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const mailgun = () =>
      mg({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
      });
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Message through bitbotbyte blog from ${name}`,
      text: `Subject : ${subject} \n\n ${message}`,
    };
    // console.log(mailOptions);
    await mailgun().messages().send(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error  sending emaiil : ", err);
    res.status(500).json({ error: "Failled to send email" });
  }
});

module.exports = router;
