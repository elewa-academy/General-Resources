var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var port		= 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('view cache', false)

var navigationController = require('./controllers/navigationController');
app.use(navigationController);

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
