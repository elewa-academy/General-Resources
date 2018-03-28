var express 	= require('express');
var app 		= express();
var port		= 3000;

var homeController = require('./controllers/homeController');
app.use(homeController);

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});
