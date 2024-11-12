import mysql from "mysql2";
import { config } from "dotenv";
config();

const host = process.env.HOST;
const user = process.env.USER;
const connectionLimit = process.env.LIMIT;
const database = process.env.DATABASE;
const password = process.env.PASSWORD;

const sqlConnection = mysql
  .createPool({
    host,
    database,
    connectionLimit,
    user,
    password,
  })
  .promise();

export default sqlConnection;
