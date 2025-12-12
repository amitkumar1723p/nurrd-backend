const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
  getPosts,
  getPost,
  createPost,
  updatePost
} = require("../controllers/postController");

const router = express.Router();

router.get("/", auth, getPosts);
router.get("/:id", auth, getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);

module.exports = router;
