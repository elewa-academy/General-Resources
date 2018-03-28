var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
	console.log('API - you have been authenticated')
	next();
});

module.exports = router;