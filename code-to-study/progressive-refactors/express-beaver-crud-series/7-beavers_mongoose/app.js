const express = require('express')
const app = express()
const beavers = require('./routes/beavers')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/beavers_database', {
  useMongoClient: true
})

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.use('/beavers', beavers)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
