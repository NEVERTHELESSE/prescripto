import sqlConnection from "../database/sql/sqlConnection.js";

export async function User(req, res) {
  const token = await req.headers.authorization.split(" ")[1];
  let result = await sqlConnection.query(
    `SELECT * FROM users WHERE token = '${token}'`
  );
  const data = result[0][0];

  console.log(token);
  res.send(data);
}
