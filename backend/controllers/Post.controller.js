import Post from "../models/Post.model.js";

export const getNews = async (req, res) => {
  try {
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const limit = parseInt(req.query.limit) || 9;
    const sortCriteria =
      req.query.type === "popular"
        ? { views: -1 } // Sort by views for popular posts
        : { createdAt: sortDirection };
    const posts = await Post.find({
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.postId && { _id: req.query.postId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: "i" } },
          { content: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
      ...(req.query.category && { category: req.query.category }),
    })
      .select("-__v -updatedAt")
      .sort(sortCriteria)
      .limit(limit);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postNews = async (req, res) => {
  // creating slug

  const slugUrl = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  // creating a post
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    category: req.body.category,
    imgUrl: req.body.imgUrl,
    slug: slugUrl,
  });

  // saving the post
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error in post controller:", error); // Log the full error
    res.status(500).json({ message: error.message });
  }
};

export const updateNews = async (req, res) => {
  try {
    const updatedNews = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          author: req.body.author,
          category: req.body.category,
          imgUrl: req.body.imgUrl,
        },
      },
      { new: true }
    );

    if (!updatedNews) {
      res.status(404).send({ message: "No news found" });
    }

    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//for fetching the popular news list
export const viewNews = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
