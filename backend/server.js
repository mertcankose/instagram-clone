const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//Remove DeprecationWarning
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

//Database Connection
(async () => {
  await mongoose.connect("mongodb://localhost/instagram", { useUnifiedTopology: true, useNewUrlParser: true });
  console.log("Database connection is successfull");
})();

//Boilerplate Project Settings Code
const app = express();

//app.set("view-engine", "pug");
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

//Use Routers
const userRouter = require("./routes/user.js");
const postRouter = require("./routes/post.js");
const storyRouter = require("./routes/story.js");

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/stories", storyRouter);

//Get Homepage
app.get("/", (req, res) => {
  //res.render("index");
  res.send("Homepage");
});

//Listen Port
const port = 8000;
app.listen(port, () => {
  console.log("Server is listening on port", `${port}`);
});

module.exports = app;
