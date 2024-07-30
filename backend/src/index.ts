import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRouter.js";
import messageRouter from "./routes/messageRouter.js";

dotenv.config();
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
