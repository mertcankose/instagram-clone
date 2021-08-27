const express = require("express");
const router = express.Router();

const UserService = require("../services/user-service.js");
const PostService = require("../services/post-service.js");
const StoryService = require("../services/story-service.js");

//get requestlerin dynamic variable olarak
//post requestlerin body olarak göndermek daha sağlıklı

router.get("/all", async (req, res) => {
  const users = await UserService.findAll();
  res.render("user", { users: users });
});

router.get("/all/json", async (req, res) => {
  const users = await UserService.findAll();
  res.send(users);
});

// : --> dynamic variable
router.get("/:id", async (req, res) => {
  const user = await UserService.find(req.params.id);
  if (!user) res.status(404);
  res.render("data", { data: user });
});

router.get("/:id/json", async (req, res) => {
  const user = await UserService.find(req.params.id);
  if (!user) res.status(404);
  res.send(user);
});

router.post("/add", async (req, res) => {
  const user = await UserService.add(req.body);
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  await UserService.del(req.params.id);
  res.send("User deleted");
});

//User follow anyone
router.post("/:id/follow", async (req, res) => {
  const user = await UserService.find(req.params.id);
  const otherUser = await UserService.find(req.body.userId);

  await UserService.follow(user, otherUser);

  res.send("User follows other user");
});

//Unfollow anyone
router.post("/:id/unfollow", async (req, res) => {
  const user = await UserService.find(req.params.id);
  const otherUser = await UserService.find(req.body.userId);

  await UserService.unfollow(user, otherUser);

  res.send("User unfollow other user");
});

//User Share Post
router.post("/:id/posts/add", async (req, res) => {
  const user = await UserService.find(req.params.id);
  const post = await PostService.add(req.body);
  await UserService.sharePost(user, post);

  res.send(post);
});

//User Delete Post
router.post("/:id/posts/delete", async (req, res) => {
  const user = await UserService.find(req.params.id);
  const post = await PostService.find(req.body.postId);
  await UserService.deletePost(user, post); //delete Array
  await PostService.del(req.body.postId); //delete DB
  res.send("Post deleted");
});

//User Like Post
router.post("/:id/posts/like", async (req, res) => {
  const user = await UserService.find(req.params.id);
  const post = await PostService.find(req.body.postId);

  await UserService.likePost(user, post);

  res.send(post);
});

//User delike Post
router.post("/:id/posts/unlike", async (req, res) => {
  const user = await UserService.find(req.params.id);
  const post = await PostService.find(req.body.postId);

  await UserService.takeBackLikeFromPost(user, post);

  res.send("Post unliked");
});

//User Share Story
router.post("/:id/stories/add", async (req, res) => {
  const user = await UserService.find(req.params.id);
  const story = await StoryService.add(req.body);
  await UserService.shareStory(user, story);
});

//User Delete Story
router.post("/:id/stories/delete", async (req, res) => {
  const user = await UserService.find(req.params.id);
  const story = await StoryService.find(req.body);
  await UserService.deleteStory(user, story); //delete Array
  await StoryService.del(req.body._id);
  res.send("Story deleted");
});

/*
router.get("/:id/name-include-mertcan", async (req, res) => {
  const userId = req.params.id;
  const user = await UserService.find(userId);
  const includeName = await user.findIncludeName();

  res.send(includeName);
})
*/

module.exports = router;
