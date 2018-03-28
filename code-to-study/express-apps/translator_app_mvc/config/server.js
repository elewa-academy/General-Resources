var express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
var app = express()

// Set view engine folder
app.set('view engine', 'ejs')
app.set('view cache', false);

// Body parser for forms
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// public assets
app.use('/public', express.static('public')) // virtual path representation to the user on the left and actual back end structure on the right

app.use(express.static('public')) // to display static files

app.use((req, res, next) =>{
    req.params.sentence = decodeURIComponent(req.params.sentence || "")
    next()
})

// connecting to the controllers for sentences and phrases
var sentences = require('../controllers/sentences')
app.use('/', sentences)

var translations = require('../controllers/translations')
app.use('/sentence', translations)

// setting up the port
app.listen(process.env.PORT || 3001, function () {
      console.log('>>>>>>>>>>>>>>> Example app listening on port 3001! <<<<<<<<<<<<<<<')
})
