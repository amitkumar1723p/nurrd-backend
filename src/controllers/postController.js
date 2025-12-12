const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
};

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json(post);
};

exports.createPost = async (req, res) => {
    const { title, body } = req.body;

    const post = await Post.create({
        title,
        body,
        userId: req.user._id,
    });

    res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
    const { title, body } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    // only owner edit
    if (post.userId.toString() !== req.user._id.toString())
        return res.status(403).json({ message: "Unauthorized" });

    post.title = title || post.title;
    post.body = body || post.body;

    await post.save();

    res.json(post);
};
