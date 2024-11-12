import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { Router } from "./controller/Router.js";

config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api", Router);

app.listen(port, "0.0.0", () =>
  console.log(`server running on port ${port}.....`)
);
