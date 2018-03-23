const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var db;

MongoClient.connect(/* put your db connection info here */, (err, database) => {
  if (err) return console.log(err);
  db = database;
});

// so routes have access to db
// find where this is used in the route files
app.use(function(req,res,next){
    req.db = db;
    next();
});

// configure app
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// configure sessions
app.use(session({
    secret: ', top',
    resave: true,
    saveUninitialized: false,
    store: db,
    cookie: {maxAge: 10000}
}));

// middleware describing what sessions do
app.get('/', function(req, res, next) {
  var sess = req.session;
   // if it isn't the first visit on their current cookie
   if (sess.views) { 
    // figure out this inside bit yourself, it's not that bad
    if (sess.views <= 5) {
      sess.views++;
      // this one here, what's it do?  why's it here?
      req.next()
    } 
    else {
      res.setHeader('Content-Type', 'text/html');
      res.write('too bad');
      res.end();
    }
  } 
  // if it is their first visit on their current cookie
  else {
    sess.views = 1;
    res.end('welcome to the session demo. refresh!');
  }
});



app.listen(process.env.PORT || 3000, () => {
  console.log('listening on 3000');
});


















