var express = require('express');
var router = express.Router();

var horseModel = require('../models/horseModel');
var anjela = {name: 'jennifer', horsiness: 2};
horseModel.addObject(anjela);

router.get('/horses', (req, res) => {
	res.send(horseModel.getAll());
});

module.exports = router;