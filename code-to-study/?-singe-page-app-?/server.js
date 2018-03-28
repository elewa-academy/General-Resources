var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render(path.join(__dirname, 'views/index'));
});

app.listen(2001, () => {
	console.log('yo, 2001');
});