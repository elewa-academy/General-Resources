const express  = require('express');
const passport = rootRequire('/config/passport');
const User = requireModel('users');
const router   = express.Router();

router.get('/signup', function(req, res) {
    res.render('users/signup', { message: [] });
});

router.post('/signup', function(req, res, next) {

    User.register(new User({ email: req.body.email }), req.body.password, function(err, user) {
        if (err) {
            return res.render('users/signup', { message : ["registration failed"] });
        }
        passport.authenticate('local')(req, res, function () {
             res.redirect('/')
        });
    })
});

module.exports = router;