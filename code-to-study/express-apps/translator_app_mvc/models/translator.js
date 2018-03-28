const mongoose = require('mongoose');

// DB object schema
var Schema = mongoose.Schema
 
var translationsSchema = new Schema({
    phrase: {type: String, unique: true},
    trObj: [{lang: String, tr: String}]
});

var transModel = mongoose.model('translation', translationsSchema);