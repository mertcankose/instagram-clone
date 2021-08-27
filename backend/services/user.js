const BaseService = require("./base-service.js");
const UserModel = require("../models/user.js");

class UserService extends BaseService {
  model = UserModel;

  //User methods
  async follow(user, otherUser) {
    user.follows.push(otherUser);
    otherUser.followers.push(user);

    await user.save();
    await otherUser.save();
  }

  async unfollow(user, otherUser) {
    const otherUserIndex = user.follows.findIndex((u) => u._id == otherUser._id);
    const userIndex = otherUser.followers.findIndex((u) => u._id == user._id);
    user.follows.splice(otherUserIndex, 1);
    otherUser.followers.splice(userIndex, 1);

    await user.save();
    await otherUser.save();
  }

  //Post Methods
  async sharePost(user, post) {
    user.posts.push(post);
    post.user = user;
    await user.save();
    await post.save();
  }

  async deletePost(user, post) {
    const postIndex = user.posts.findIndex((p) => p._id == post._id);
    user.posts.splice(postIndex, 1);

    await user.save();
    await post.save();
  }

  async likePost(user, post) {
    post.likes.push(user);
    user.liked_posts.push(post);

    await user.save();
    await post.save();
  }

  async takeBackLikeFromPost(user, post) {
    const likeIndex = post.likes.findIndex((u) => u._id == user._id);
    user.liked_posts.splice(likeIndex, 1);
    post.likes.splice(likeIndex, 1);

    await user.save();
    await post.save();
  }

  //Story Methods
  async shareStory(user, story) {
    user.stories.push(story);
    story.user = user;
    await user.save();
    await story.save();
  }

  async deleteStory(user, story) {
    const storyIndex = user.stories.findIndex((s) => s._id == story._id);
    user.stories.splice(storyIndex, 1);

    await user.save();
    await story.save();
  }
}

module.exports = new UserService();

/*
  constructor() {
    super(UserModel, `${__dirname}/../user-database.json`);
  }
  // üstteki kullanım yerine alttaki kullanım node 12+ için daha kullanışlı
*/
