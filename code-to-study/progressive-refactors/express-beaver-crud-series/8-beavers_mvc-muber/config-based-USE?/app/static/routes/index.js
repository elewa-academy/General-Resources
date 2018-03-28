const express  = require('express');
const router   = express.Router();
const passport = rootRequire("config/passport")

/*router.get('/', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
    res.render(pathTo.view('static/index'), { user : req.user });
});
*/

router.get("/",
    passport.authenticate('session'),
    function(req,res,err){
        if(!(
            req.session &&
            req.session.passport &&
            req.session.passport.user)) {
            res.redirect("/login")
        }
        res.render(pathTo.view('static/index'), { user : req.user });
   }
)

module.exports = router;


/*
module.exports = [
    {
        method: "get",
        path: '/',
        filters: passport.authenticate('local', { failureRedirect: '/login' }),
        actions: function (req, res) {
            res.render(pathTo.view('static/index'), { user : req.user });
        }
    }
]


*/