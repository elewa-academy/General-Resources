var express = require('express');
var router = express.Router();

var playerController = require('../controllers/playerController');

router.get('/getNextPlayer', playerController.getNextPlayer);

router.post('/togglePlayer', playerController.togglePlayer);
router.post('/setFirstPlayer', playerController.setFirstPlayer);
router.post('/buildPlayer', playerController.buildPlayer);

module.exports = router;	