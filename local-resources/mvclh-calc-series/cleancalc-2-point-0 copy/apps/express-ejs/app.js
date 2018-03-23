// same role as the onload init function
// brings everything together and starts it listening

// require and initialize the pure-js section of your app
var model = require('../../components/models/async-model');
var view = require('../../components/views/ejs-view-object');
var controller = require('../../components/controllers/async-controller');
var logic = require('../../components/logics/async-logic');
var route_handler = require('../../components/handlers/express-routes');


// set these here because they don't change with each request
controller.set('model', model);
controller.set('logic', logic);
controller.set('title', 'overly complicated calculator');


// require and set up the 'handlers' - express app
var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var path = require('path');
var PORT = 1337;

app.set('view engine', 'ejs');

// parses the body of the http request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// statically serves the css
app.use(express.static(path.join(__dirname, 'public')));

// connect the controller app object to the current request
// this function could be smoother, but this is more legible (methinks)
app.use(function(req, res, next) {
	// set view to render with this cycle's res object
	view.setRes(res);
	// reset the controller's view
	controller.set('view', view);
	// attach rebuilt controller to this response.
	res.locals.controller = controller;
	next();
});
app.use(route_handler);

app.listen(PORT, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('listening on ' + PORT);
	};
});