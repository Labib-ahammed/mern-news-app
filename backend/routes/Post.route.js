import express from "express";
import {
  deleteNews,
  postNews,
  getNews,
  updateNews,
  viewNews,
} from "../controllers/Post.controller.js";

const router = express.Router();

router.get("/getnews", getNews);
router.post("/postnews", postNews);
router.put("/updatenews/:id", updateNews);
router.delete("/deletenews/:id", deleteNews);
router.post("/view/:id", viewNews); //for fetching the popular news list



export default router; // Corrected export statement
