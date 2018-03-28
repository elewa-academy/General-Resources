const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// passport config
var User = requireModel('users');
passport.use(new LocalStrategy({usernameField: "email"}, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport
