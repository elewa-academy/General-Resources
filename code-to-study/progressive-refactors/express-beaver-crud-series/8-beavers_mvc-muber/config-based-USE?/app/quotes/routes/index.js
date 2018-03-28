var express = require('express');
var passport = require('passport');
var router = express.Router();


router.get('/quotes', function (request, response) {
    var a = db.find({}, (err, result) => {
        if (err) return console.log(err)
        response.render('quotes/index.ejs', {quotes: result})
        // renders index.ejs
        
    } )
})

router.get('/quotes/:id/update', (req, res, params) => {
    db.find({_id: req.params.id}, (err, result) => {
        if (err) return console.log(err)
        res.render('quotes/update.ejs', {quotes: result})
    })
})

router.post('/quotes/:id/update', (req, res, params) => {
    db.update({_id: req.params.id},{$set: {name: req.body.name, quote: req.body.quote}}, (err, numReplaced) => {
        if (err) return console.log(err)
            res.redirect('/')
    })
})

router.post('/quotes/:id/delete', (req, res, params) => {
    db.remove({_id: req.params.id}, (err, num) => {
        if (err) return console.log(err)
            res.redirect('/')
    })
})


/*
app.put('/quotes/(:id)/delete', (req, res) => {
   db.insert(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log(req.body)
  })
          res.render('index.ejs', {quotes: []})
})
*/

module.exports = router