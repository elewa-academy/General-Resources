var express = require('express');
var router = express.Router();
var appStatic = require('./config/staticServer');
var appData = require('./config/dataServer');
var path = require('path');

// users go to localhost 3000
router.use(appStatic.use(express.static(path.join(__dirname, './public'))));

// your tictactoe game talks to localhost 3001 for its data
var playerAPI = require('./routes/playerRoutes');
router.use(appData.use(playerAPI));

var boardAPI = require('./routes/boardRoutes');
router.use(appData.use(boardAPI));

module.exports = router