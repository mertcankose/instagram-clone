const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const UserModel = require("../models/user"); //Load User

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      UserModel.findOne({
        email: email,
      }).then((user) => {
        if (!user) {
          return done(null, false, { message: "That email is not registered" });
        }

        //Match Password with bcrypt
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err, user) => {
      done(err, user);
    });
  });
};

//Old code and Google
/*

require("dotenv").config();
const UserModel = require("../models/user");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

module.exports = (passport) => {
  passport.use(UserModel.createStrategy());

  //works all strategy
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    UserModel.findById(id, function (err, user) {
      done(err, user);
    });
  });

  //Google Auth20
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/secrets",
        //userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        UserModel.findOrCreate({ googleId: profile.id }, (err, user) => {
          return cb(err, user);
        });
      }
    )
  );
};


*/
