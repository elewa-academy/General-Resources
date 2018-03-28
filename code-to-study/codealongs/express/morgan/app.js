const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');

app.use(morgan('common', {
		stream: fs.createWriteStream('./access.log', {flags: 'a'})
	}));

app.listen(3000, () => {
	console.log('on 3000');
});