const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const students = require('./routes/students.js')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/students_mongo', {
  useMongoClient: true
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/students', students)


app.listen(3000, () => {
  console.log('Listening on port 3000')
})
