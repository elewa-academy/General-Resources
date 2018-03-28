const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BeaverSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  location: String
})

module.exports = mongoose.model('Beaver', BeaverSchema)
