const mongoose              = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema                = mongoose.Schema;

const User = new Schema({});

User.plugin(passportLocalMongoose, {usernameField: 'email'});

module.exports = mongoose.model('User', User);
