const express  = require('express');
const passport = rootRequire('config/passport');
const User     = requireModel('users');
const router   = express.Router();

router.get('/login', function(req, res) {
    //console.log(1)
    debugger
    res.render('sessions/login', { message : ["hello"] });
});

router.post('/login',
    passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login'})
);

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;

