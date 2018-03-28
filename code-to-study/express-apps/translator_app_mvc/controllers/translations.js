var express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
// connect to our model with assigned variable to use inside the controller
const transModel = mongoose.model("translation")

// Translations API
// GET    /sentence/:sentence Display add translation form
router.get("/:sentence", function(req, res){
    res.render("addtranslation", {sentence: req.params.sentence}) // here first translations is a key accesible from the ejs and the second translations is the object accessible form the js file
})

// POST /sentence/:sentence add translation
router.post("/:sentence", function(req, res){
/*transModel.create({sentence: req.params.sentence}, { $set: {trObj: {IT: "ciao"}}} ,(err, records) =>*/ 
    transModel.findOne({"phrase": req.params.sentence}, function(err, record){
        record.trObj.push({lang: req.body.addNewLang, tr: req.body.addTranslation})
        transModel.update( {_id: record._id}, {$set: {trObj: record.trObj}}, (err, record) =>{
            res.redirect("/")
        })
    })    
})

// POST /sentence/:sentence/delete/:lang    delete translation
router.post("/:sentence/delete/:lang", function(req, res){
    transModel.update({phrase: req.params.sentence}, {$pull: {trObj: {lang: req.params.lang}}}, (err, records) =>{
        if (err) {
            console.log(err);
        }
        res.redirect("/")
    })
})

// GET  /sentence/:sentence/update/:lang    show update form
router.get("/:sentence/update/:lang", function(req, res){
    var sentence = req.params.sentence
    var lang = req.params.lang
    transModel.findOne({phrase: sentence}, (error, record) => {
        var translations = record.trObj
        var translation
        for (trans of translations) {
            console.log(trans)
            if (trans.lang === lang) translation = trans.tr
        }
        console.log({
            sentence: req.params.sentence,
            lang: req.params.lang,
            translation: translation
        })
        res.render("updatelanguage", {
            sentence: req.params.sentence,
            lang: req.params.lang,
            translation: translation
        }) // here first translations is a key accesible from the ejs and the second translations is the object accessible form the js file

    })
})

router.post("/:sentence/update/:lang", function(req, res){
    var sentence = req.params.sentence
    var lang = req.params.lang
    var trans = req.body.newTr
    transModel.update({phrase: sentence , "trObj.lang": lang } , {$set: {"trObj.$.tr": trans}}, (error, record) =>{
        console.log(error, record)
        res.redirect("/")

    })
})

module.exports = router