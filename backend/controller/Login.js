import sqlConnection from "../database/sql/sqlConnection.js";
import { config } from "dotenv";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";

config();

export async function Login(req, res) {
  const { email, password } = req.body;

  let result = await sqlConnection.query(
    `SELECT * FROM users WHERE email = '${email}'`
  );
  if (result[0].length == 0) {
    res.send("invalid username or password");
  } else {
    const data = result[0][0];
    const hash = data.password;
    const compare = await brcypt.compare(password, hash);
    if (compare) {
      const secret_key = process.env.SECRET_KEY;
      const token = jwt.sign(data, secret_key);
      res.send({ data, token, success: "success" });
    } else {
      res.send("invalid username or password");
    }
  }
}
