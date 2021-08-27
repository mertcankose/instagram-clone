const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
    autopopulate: {
      maxDepth: 1,
    },
  },
  content: String,
  likes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

CommentSchema.plugin(require("mongoose-autopopulate"));

const CommentModel = mongoose.model("Comment", CommentSchema);

module.exports = CommentModel;
