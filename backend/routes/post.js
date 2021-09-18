const express = require("express");
const router = express.Router();

const PostService = require("../services/post.js");
const UserService = require("../services/user.js");

router.get("/", async (req, res) => {
  const posts = await PostService.findAll();
  res.send(posts);
});

router.get("/:postId", async (req, res) => {
  const post = await PostService.find(req.params.postId);
  if (!post) res.status(404);
  res.send(post);
});

////// Share-Delete Post //////
router.post("/:userId", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const post = await PostService.add(req.body);
  await UserService.sharePost(user, post);

  res.send(post);
});

router.delete("/:userId", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const post = await PostService.find(req.body.postId);
  await UserService.deletePost(user, post); //delete Array
  await PostService.del(req.body.postId); //delete DB
  res.send("Post deleted");
});

////// Like-Unlike Post //////
router.post("/:userId/like", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const post = await PostService.find(req.body.postId);

  await UserService.likePost(user, post);
  res.send(post);
});

router.post("/:userId/unlike", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const post = await PostService.find(req.body.postId);

  await UserService.takeBackLikeFromPost(user, post);

  res.send("Post unliked");
});

////// Comment-Delete Comment //////
/*
router.post("/:userId/comment", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const post = await PostService.find(req.body.postId);
  const comment = await CommentService.add(req.body.comment);

  await UserService.commentPost(user, post, comment);
  res.send(comment);
});

router.post("/:userId/deleteComment", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const post = await PostService.find(req.body.postId);
  const comment = await CommentService.find(req.body.commentId);

  await UserService.deleteComment(user, post, comment);

  res.send("Comment Deleted");
});
*/

module.exports = router;
