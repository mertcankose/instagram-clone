const express = require("express");
const router = express.Router();

const UserService = require("../services/user.js");
const PostService = require("../services/post.js");
const StoryService = require("../services/story.js");

//get requestlerin dynamic variable olarak
//post requestlerin body olarak göndermek daha sağlıklı

router.get("/", async (req, res) => {
  const users = await UserService.findAll();
  res.send(users);
});

router.post("/", async (req, res) => {
  const user = await UserService.add(req.body);
  res.send(user);
});

router.get("/:id", async (req, res) => {
  const user = await UserService.find(req.params.id);
  if (!user) res.status(404);
  res.send(user);
});

/*
router.get("/:userName", async (req, res) => {
  const user = await UserService.findByUserName(req.params.userName);
  if (!user) res.status(404);
  res.send(user);
});
*/

router.delete("/:userId", async (req, res) => {
  await UserService.del(req.params.userId);
  res.send("User deleted");
});

router.post("/:userId/follow", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const otherUser = await UserService.find(req.body.otherUserId);

  await UserService.follow(user, otherUser);

  res.send("User follows other user");
});

router.post("/:userId/unfollow", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const otherUser = await UserService.find(req.body.otherUserId);

  await UserService.unfollow(user, otherUser);

  res.send("User unfollow other user");
});

router.patch("/:userId", async (req, res) => {
  await UserService.updateOne(req.params.userId, req.body);
  res.send("User Patched");
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
