var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// cross origin resource sharing
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next){
  res.set('Access-Control-Allow-Origin' , '*');
  res.set('Access-Control-Allow-Credentials', true);
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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