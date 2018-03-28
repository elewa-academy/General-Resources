var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var port		= 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('view cache', false)

// good chance to introduce sessions

var usersController = require('./controllers/usersController');
app.use(usersController);

var postsController = require('./controllers/postsController');
app.use(postsController);

var commentsController = require('./controllers/commentsController');
app.use(commentsController);

app.use('/:operation', (req, res, next) => {
  var message = 'path \'' + req.params.operation + '\' does not exist';
  var error = {'404': message};
  res.send(error);
});

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});


