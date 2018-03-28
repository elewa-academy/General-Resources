var User = require("../models/users");
var LocalStrategy = require("passport-local").Strategy;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(
    "login",
    new LocalStrategy(function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) return done(err);
        if (!user) {
          done(null, false, { message: "User doesn't exist" });
        }
        user.comparePasswords(password, function(err, isMatch) {
          if (err) return done(err);
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Invalid password" });
          }
        });
      });
    })
  );
};
