const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const beavers = require('./routes/beavers')
/*
First way:
const routes = require('./routes/routes')

routes(app)
*/
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/beavers', beavers)
// app.use('/cars', cars)
// app.use('/houses', houses)


app.listen(3000, () => {
  console.log('Listening on port 3000')
})
