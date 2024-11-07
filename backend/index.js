import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/Post.route.js";
import commentRoute from "./routes/Comment.route.js";
import database from "./config/db.js";
dotenv.config();
database();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
app.use("/api/v1/news", router);
app.use("/api/v1/comment", commentRoute);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
