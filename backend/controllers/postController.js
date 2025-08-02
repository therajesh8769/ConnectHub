import Post from '../models/Post.js';

export const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    const author = req.user._id;

    const post = new Post({ text, author });
    await post.save();

    // Populate author information
    await post.populate('author', 'name');

    res.status(201).json({
      message: 'Post created successfully',
      post
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join('. ') });
    }
    res.status(500).json({ message: 'Server error during post creation.' });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name')
      .sort({ createdAt: -1 })
      .limit(50); // Limit to 50 most recent posts

    res.json({ posts });
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching posts.' });
  }
};