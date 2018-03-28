var express 	= require('express');
var app 		= express();
var port		= 3000;

app.get('/', (req, res) => {
	res.send('/horses to see all horses.      /spiders to see all spiders')
});

var spiderController = require('./controllers/spiderController');
app.use(spiderController);

var horseController = require('./controllers/horseController');
app.use(horseController);

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});
