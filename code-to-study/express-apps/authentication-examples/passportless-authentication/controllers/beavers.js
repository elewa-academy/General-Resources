const express  = require('express');
const router   = express.Router();
const path   = require("path")



module.exports = function(Beaver, Session){

    //Locals can be shared with all the other functions of the stack including ejs files
    // at each request select the usefull data and make it avaliable through res.locals to the next
    // route handling function in the stack
    router.use(function(req, res, next){
        res.locals.beaver = {
            name: req.body.name,
            email: req.body.password,
        }
        res.locals.session = {
            id: req.cookies.sessionId,
        }
        next()
    })


    // Sing up function, gets initial data sent by user (username & password) and to callbacks;
    // success: what to do in case everything works and what to
    // fail: what to do in case the procedure fails
    function signUp (data, success, fail ) {
        Beaver.create(data, function(data){
            if (data) {
                Session.create(data, success)
            } else{
                fail()
            }
        })
    }

    // Sign in function, gets initial data sent by user (username & password) and to callbacks;
    // success: what to do in case everything works and what to
    // fail: what to do in case the procedure fails
    function signIn (data, success, fail) {
        Beaver.findBeaver(data, function(result){
            if (result) {
                Session.create(result, success)
            } else{
                fail()
            }
        })
    }

    // Scheck if a session id is present in the cookie and if a session record wit the same id is found in the DB
    function signedIn (data, success, fail) {
        Session.find(data, function(data){
            console.log(data);
            (data ? success() : fail())
        })
    }


    // check if user is signedIn before showing message; else redirect to /signIn
    router.get('/', (req,res) => {
        signedIn({id: req.cookies.sessionId},
            ()=> {res.render("home")},
            () => {res.redirect("signIn")}
        )
    })

    // show the page for signIn or signUp, according to the URL given
    // What happens if we request the /home url?
    router.get('/sign:action', function(req, res){
        signedIn({id: req.cookies.sessionId},
            () => { res.redirect("/")},
            () => {res.render("sign" + req.params.action)}
        )
    })


    // on sign up and sign in set the cookie to have the following value {'sessionId', sessionId}
    router.post('/signUp', function(req, res, next){
        signUp( req.body,
            function(sessionId) { // success
                res.cookie('sessionId', sessionId, { maxAge: 900000, httpOnly: false });
                res.redirect("/")},
            function(){ // fail
                res.render('/signUp')
            }
        )
    })


    // on sign up and sign in set the cookie to have the following value {'sessionId', sessionId}
    router.post('/signOut', function(req, res, next){
        Session.delete({id: req.cookies.sessionId})
        res.clearCookie('sessionId');
        res.redirect('/signIn')
    })

    router.post('/signIn', function(req, res, next){
        signIn( req.body,
            function(sessionId) { // success
                res.cookie('sessionId', sessionId, { maxAge: 900000, httpOnly: true });
                res.redirect("/")},
            function(){ // fail
                res.redirect("/signUp")
            }
        )
    })
    return router
}
