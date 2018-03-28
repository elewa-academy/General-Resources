const express      = require('express');
const bodyParser   = require('body-parser')
const MongoClient  = require('mongodb').MongoClient
const cookieParser = require('cookie-parser')

const app         = express();

// parse incoming data from forms in post requests to an object
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// access cookies as objects
app.use(cookieParser())

app.set('view engine', 'ejs')
app.use(express.static('public'))

MongoClient.connect('mongodb://127.0.0.1/test', (err, database) => {
    if (err) return console.log(err)

    //since we need to connect to the db server async and we have more than one mode we wrap the models and controllers
    //into functions that can be called once the db is connected
    //in this exercise we have 2 models: beaver model and session models that stores the session of each beavers
    const controllers  = require('./controllers/beavers')(
        require('./models/beaver')(database),
        require('./models/session')(database)
        )


    app.use(controllers)

    app.listen(3000, function() {
        console.log('listening on 3000');
    })

})

module.exports = app;