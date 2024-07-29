import express from "express";
import { login, logout, signup, getMe } from "../controllers/authController.js";
import jwtVerify from "../middleware/jwtVerify.js";

const router = express.Router();

router.get("/me", jwtVerify, getMe);
router.post("/login", login);

router.post("/logout", logout);

router.post("/signup", signup);

export default router;
