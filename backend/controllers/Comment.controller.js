import Comment from "../models/Comment.model.js";
export const createComment = async (req, res) => {
  try {
    const { content, postId } = req.body;
    const newComment = new Comment({
      content,
      postId,
    });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    console.log(error.message, "error in the create comment controller");
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (error) {
    console.log(error.message, "error in the get comments controller");
  }
};
