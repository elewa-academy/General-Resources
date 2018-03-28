var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
	console.log('STATIC - you have been authenticated')
	next();
});

module.exports = router;