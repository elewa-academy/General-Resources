var express = require('express');
var router = express.Router();

var model = require('../controllers/model');

router.get('/', (req, res) => {
	var data = model.word
	res.sen	d(data);
});

module.exports = router;
