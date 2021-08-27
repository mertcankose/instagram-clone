const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRouter = require("./routes/user.js");
const postRouter = require("./routes/post.js");
const storyRouter = require("./routes/story.js");

require("./mongo-connection.js");

const app = express();

//Some Project Settings
app.set("view-engine", "pug");
app.use(bodyParser.json());
app.use(cors());

//Use Routers
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/story", storyRouter);

//Get Homepage
app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
