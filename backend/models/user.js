const mongoose = require("mongoose");
require("mongoose-type-email");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    minLength: 2,
  },
  name: {
    type: String,
    require: true,
    minLength: 2,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  googleId: {
    type: String,
    default: "",
  },
  secret: {
    type: String,
  },
  followers: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  follows: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  posts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
      autopopulate: {
        maxDepth: 2,
      },
    },
  ],
  stories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Story",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  ig_videos: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  saved_posts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  tagged_posts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  liked_posts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Post",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});

UserSchema.plugin(require("mongoose-autopopulate"));
UserSchema.plugin(findOrCreate);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;

/*
module.exports = class User {
  constructor(username, name, posts = [], followers = [], follows = [], igtv_videos = [], saved_posts = [], tagged_with_posts = [], id) {
    this.username = username;
    this.name = name;
    this.posts = posts;
    this.followers = followers;
    this.follows = follows;
    this.igtv_videos = igtv_videos;
    this.saved_posts = saved_posts;
    this.tagged_with_posts = tagged_with_posts;
    this.id = id;
  }
  createPost(post) {
    post.username = this.username;
    post.name = this.name;
    this.posts.push(post);
  }
  static create({ username, name, posts, followers, follows, igtv_videos, saved_posts, tagged_with_posts, id }) {
    return new User(username, name, posts, followers, follows, igtv_videos, saved_posts, tagged_with_posts, id);
  }
}
*/
