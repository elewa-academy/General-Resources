var express = require('express');
var router = express.Router();

var spiderModel = require('../models/spiderModel');
var anjela = {name: 'anjela', spideriness: 2};
spiderModel.addObject(anjela);

router.get('/spiders', (req, res) => {
	res.send(spiderModel.getAll());
});

module.exports = router;