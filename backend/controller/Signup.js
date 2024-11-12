import bcypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

config();

import sqlConnection from "../database/sql/sqlConnection.js";

export async function Signup(req, res) {
  const { username, email, password, profilePics } = req.body;
  const hash = await bcypt.hash(password, 11);
  // console.log(email);
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "neverthelesse21@gmail.com",
  //     pass: process.env.PASS,
  //   },
  // });
  // const OTP = Math.floor(Math.random() * 900000 + 10000);
  // const mailOption = {
  //   from: "neverthelesse21@gmail.com",
  //   to: email,
  //   subject: "Authentication code from prescripto ",
  //   text: `your pass code ${OTP}`,
  // };

  // transporter.sendMail(mailOption, function (err, data) {
  //   if (err) {
  //     console.log(err);
  //     res.send("un able to send message");
  //   } else {
  //     console.log(data.response, OTP);
  //     res.send("success");
  //   }
  // });

  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(req.body, secret_key);
  try {
    await sqlConnection.query(
      `INSERT INTO users(username,email,password,profilePics,token) VALUES ("${username}", "${email}","${hash}","${profilePics}","${token}")`
    );
    res.send({ data: req.body, token, success: "success" });
  } catch (e) {
    if (e.errno == 1062) {
      console.log("duplicate key");
      res.send("duplicate key");
    } else {
      console.log(e);
    }
  }
}
