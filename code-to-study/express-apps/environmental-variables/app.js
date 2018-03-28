var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('yo');
});

module.exports = app;