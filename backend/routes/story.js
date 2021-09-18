const express = require("express");
const router = express.Router();

const UserService = require("../services/user.js");
const StoryService = require("../services/story.js");

router.get("/", async (req, res) => {
  const stories = await StoryService.findAll();
  res.send(stories);
});

router.get("/:storyId", async (req, res) => {
  const story = await StoryService.find(req.params.storyId);
  res.send(story);
});

////// Share-Delete Story //////

router.post("/:userId", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const story = await StoryService.add(req.body);

  await UserService.shareStory(user, story);
  res.send(story);
});

router.delete("/:userId", async (req, res) => {
  const user = await UserService.find(req.params.userId);
  const story = await StoryService.find(req.body.storyId);

  await UserService.deleteStory(user, story); //delete Array
  await StoryService.del(req.body.storyId); //delete DB
  res.send("Story deleted");
});

module.exports = router;
