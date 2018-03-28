var express = require('express');
var app = express();

// cross origin resource sharing
app.use(function(req, res, next){
  res.set('Access-Control-Allow-Origin' , 'http://localhost:3000');
  next();
});

app.listen(3001, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('data on on ' + 3001);
	};
});

module.exports = app;

// https://stackoverflow.com/questions/11181546/how-to-enable-cross-origin-resource-sharing-cors-in-the-express-js-framework-o
