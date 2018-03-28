var express = require('express')
const router = express.Router()
const mongoose = require("mongoose")

// connect to our model with assigned variable to use inside the controller
const transModel = mongoose.model("translation")


// GET  /   Main sentence page
//var temp = {bananas: "", records: records}; // we can define a variable to hold references to the object for both server and hello.ejs
router.get("/", function(req, res){
    transModel.find({}, (err, records) =>{ // find all instances in transModel
        // records => // [{phrase: "...", lang: "...", translation: "..."}]
        res.render("hello", {output: records}) // 'output' is the name of variable which goes to ejs file and passes 'records' as the output
    })
     
})

// Sentences API
// POST /sentence   Create new sentence
router.post("/sentence", function(req, res){
    transModel.create({phrase: req.body.sentence}, (err, records) =>{
        res.redirect("/")
    }) 
})

//POST  /sentence/:sentence/delete  Delete sentence
router.post("/sentence/:sentence/delete/", function(req, res){
    transModel.remove({phrase: req.params.sentence}, (err, records) =>{      
        res.redirect("/")
    })
})

// GET  /sentence/:sentence/update  show update form
router.get("/sentence/:sentence/update", function(req, res){
    res.render("updatesentence", {sentence: req.params.sentence, output: res}) // here first translations is a key accesible from the ejs and the second translations is the object accessible form the js file
})

// POST /sentence/:sentence/update  Update sentence
router.post("/sentence/:sentence/update", function(req, res){
    var oldPhrase = req.params.sentence
    var newPhrase = {phrase: req.body.newSentence}
    transModel.update({phrase: oldPhrase}, {$set: newPhrase}, (err, PhraseRecord) => {
                if(err) {
            console.log("there's been an error")
            res.redirect("/")
            return
        }
        res.redirect("/")
    })
})

module.exports = router