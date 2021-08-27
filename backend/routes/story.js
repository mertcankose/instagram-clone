const express = require("express");
const router = express.Router();

const PostService = require("../services/post-service.js");

router.get("/", async (req, res) => {
  const posts = await PostService.findAll();
  res.render("list", { posts: posts });
});

router.get("/:id", async (req, res) => {
  const postId = req.params.id;
  const post = await PostService.find(postId);

  res.render("data", { data: post });
});

router.post("/", async (req, res) => {
  const post = await PostService.add(req.body);
  res.send(post);
});

router.delete("/:id", async (req, res) => {
  const postId = req.params.id;
  await PostService.del(postId);

  res.send("Post deleted");
});

module.exports = router;
