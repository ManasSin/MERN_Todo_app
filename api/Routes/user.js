import Express from "express";
import { loginUser, signupUser } from "../Controllers/userController.js";

export const router = Express.Router();

//login route
router.post("/login", loginUser);

//sign route
router.post("/signup", signupUser);
