var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var SALT_FACTOR = 10;

var userSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre("save", function(done) {
  var user = this;
  if (!user.isModified("password")) {
    return done();
  }
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return done(err);
    bcrypt.hash(user.password, salt, null, function(err, hashedPassword) {
      if (err) return done(err);
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.comparePasswords = function(guess, next) {
  bcrypt.compare(guess, this.password, (err, isMatch) => {
    next(err, isMatch);
  });
};

var User = mongoose.model("User", userSchema);
module.exports = User;
