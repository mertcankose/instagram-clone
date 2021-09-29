if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const cors = require("cors");
const ejs = require("ejs");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
//const methodOverride = require("method-override"); //clientta desteklenmeyen put delete gibi http request işlemlerini kullanmamıza olanak sağlar
//const GoogleStrategy = require("passport-google-oauth20").Strategy;

//Remove DeprecationWarning
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// Passport Config
require("./config/passport")(passport);

//Database Connection
(async () => {
  await mongoose.connect("mongodb://localhost/instagram", { useUnifiedTopology: true, useNewUrlParser: true });
  console.log("Database connection is successfull");
})();

const app = express();

//Static
app.use(express.static("public"));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Cors
app.use(cors());

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash (for errors)
app.use(flash());

//For Put and Delete
//app.use(methodOverride("_method"));

// Global variables (for errors)
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//Routes
const baseRouter = require("./routes/base.js");
const userRouter = require("./routes/user.js");
const postRouter = require("./routes/post.js");
const storyRouter = require("./routes/story.js");

app.use("/", baseRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/stories", storyRouter);

//Listen Port
const port = 8000;
app.listen(port, () => {
  console.log("Server is listening on port", `${port}`);
});

module.exports = app;
