import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

export async function Contact(req, res) {
  const { email, subject, username, message } = req.body;
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "neverthelesse21@gmail.com",
      password: process.env.PASS,
    },
  });

  const mailOption = {
    from: email,
    to: "neverthelesse21@gmal.com",
    subject,
    text: ` this message is coming from ${username} ${message}`,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send("success");
    }
  });
}
