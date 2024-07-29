import express, { Router } from "express";
import jwtVerify from "../middleware/jwtVerify.js";
import { sendMessage, getMessages, getUsersForConversation } from "../controllers/messageController.js";

const router: Router = express.Router();

router.get("/conversations", jwtVerify, getUsersForConversation);
router.get("/:id", jwtVerify, getMessages);

router.post("/send/:id", jwtVerify, sendMessage);

export default router;
