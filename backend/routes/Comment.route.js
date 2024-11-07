import express from "express";
import {
  createComment,
  getComments,
} from "../controllers/Comment.controller.js";

const router = express.Router();

router.post("/create", createComment);
router.get("/getcomment/:postId", getComments);

export default router; // Corrected export statement
