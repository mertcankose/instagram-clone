const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    autopopulate: {
      maxDepth: 1,
    },
  },
  photo: {
    //data: Buffer,
    //contentType: String,
    type: String,
    default: "",
  },
  video: {
    //data: Buffer,
    //contentType: String,
    type: String,
    default: "",
  },
});

const StoryModel = mongoose.model("Story", StorySchema);

module.exports = StoryModel;
