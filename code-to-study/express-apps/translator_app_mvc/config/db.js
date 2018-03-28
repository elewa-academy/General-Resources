// init DB and connect to the test DB "mongodb://localhost/test"
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
let db = mongoose.connection; 

// require models
require("../models/translator.js")