var express = require('express');
var appStatic = require('./config/staticServer');
var appData = require('./config/dataServer');
var path = require('path');

// users go to localhost 3000
appStatic.use(express.static(path.join(__dirname, './micro-services/public')));

// your tictactoe game talks to localhost 3001 for its data
var playerAPI = require('players');
appData.use(playerAPI);

var boardAPI = require('board');
appData.use(boardAPI);

