var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSchema = new Schema({
    name: {type: String, index: true, unique: true}
})

mongoose.model('records', recordSchema)


var arraySchema = new Schema({
    array: {type: [Number], index: true, unique: true}
})

mongoose.model('arrays', arraySchema)