const User = require('../models/user')
const jwt = require('jwt-simple')
const secret = require('../config/secret')

// We never want to save a plain password
// If someone has access to our database
// We want to store an encrypted version

tokenForUser = (user) => {
  return jwt.encode({ sub: user.id }, secret)
}

module.exports = {
  signup(req, res, next) {

    const email = req.body.email
    const password = req.body.password

    //Send a custom error message when the email and password isn't given
    if (!email || !password) {
      return res.status(422).send({error: 'You must provide an email and password'})
    }
    // See if a user with given email exists
    User.findOne({ email }, (error, existingUser) => {
      if (error) { return next(error)}

      // If user with email exists, return error
      if (existingUser) {
        // 422 unproccesable entity
        return res.status(422).send({ error: 'Email is already in use'})
      }

      // If user does not exist, create and save user
      const user = new User({
        email: email,
        password: password
      });

      user.save(function(err) {
        if (err) { return next(err); }
        // Repond to request indicating the user was created
        res.send('user succesfully added ' + user)
      });
    })
  },
  signin(req, res, next) {
    // User has already had their email and password auth'd
    // We need to give them a token
    res.cookie('jwt', tokenForUser(req.user), {maxAge: 3600000 * 24, httpOnly: false})
    res.send('cookie added, see if it works, after this go to the home route')
  },
  signout(req, res, next) {
    // There is no way to delete a cookie from the client side. We simply set the cookie to be empty
    res.cookie('jwt', '', {maxAge: 3600000 * 24, httpOnly: false})
    res.redirect('/signin')
  }
}
