import mongoose from "mongoose";

const PostNews = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Unknown",
    },
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    // Add any other required fields here
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostNews);
export default Post;
