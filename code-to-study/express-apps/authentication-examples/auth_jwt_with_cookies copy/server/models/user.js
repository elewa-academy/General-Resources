const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')


const userSchema = new Schema({
  // lowercase because laurens@gmail.com and LAURENS@gmail.com are seen as unique
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true}
})

// On Save hook, encrypt password
// before saving a model, run this function
userSchema.pre('save', function(next) {
  // getting access to the user model
  // user is an instance of the usermodel
  // user has a specific email and password that we could reference with user.email and user.password
  const user = this;

  // generate a salt then run callback
  // salt is randomly generated data that is used for hashing passwords
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

// whenever we create user object we're going to have acess to the methods
userSchema.methods.comparePassword = function(candidatePassword, callback) {
 // this is reference to usernmodel (hasshed password)
 // this.password is our salted and hashed password
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}


const User = mongoose.model('user', userSchema)

module.exports = User
