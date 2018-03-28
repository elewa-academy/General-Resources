// require everything
var model = require('../../components/models/basic-mvclh-model');
var view = require('../../components/views/basic-terminal-view');
var controller = require('../../components/controllers/basic-mvclh-controller');
var logic = require('../../components/logics/basic-mvclh-logic');

// build everything
controller.model = model;
controller.view = view;
controller.logic = logic;



// export the app
module.exports = controller;

