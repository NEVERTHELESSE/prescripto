import express from "express";
import { Signup } from "./Signup.js";
import { Login } from "./Login.js";
import { User } from "./User.js";
import { Contact } from "./Contact.js";

export const Router = express.Router();

Router.post("/signup", Signup);

Router.post("/login", Login);

Router.get("/user", User);

Router.post("/contact", Contact);
