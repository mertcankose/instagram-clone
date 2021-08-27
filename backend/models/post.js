const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
    autopopulate: {
      maxDepth: 1,
    },
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  video: {
    data: Buffer,
    contentType: String,
  },
  description: { type: String, default: "" },
  location: { type: String, default: "" },
  likes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
  postedAt: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.plugin(require("mongoose-autopopulate"));

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;

/*
const Chalk = require("chalk");

module.exports = class Post {
  constructor(user, photo, description = "", location = "", likes = [], comments = [], id) {
    this.username = user.username;
    this.name = user.name;
    this.photo = photo;
    this.description = description;
    this.location = location;
    this.likes = likes;
    this.comments = comments;
    this.id = id;
  }
  report() {
    console.log(Chalk.blue.bgRed.bold(this.username), "share a post", Chalk.green(this.location), "and this description ", this.description);
  }
  static create({ user, photo, description, location, likes, comments, id }) {
    return new Post(user, photo, description, location, likes, comments, id);
  }
}
*/
