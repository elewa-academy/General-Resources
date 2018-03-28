var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

app.use(function(req, res, next){console.log('yo'); next()})
app.use('/tate', express.static(path.join(__dirname, './paintings/tate/')));
app.use('/tate', express.static(path.join(__dirname, './paintings/tate/')));

app.get('/tate', (req, res) => {
	res.sendFile(path.join(__dirname, './public/tate2.html'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/home.html'));
})

app.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('yo, ' + port);
	};
});


