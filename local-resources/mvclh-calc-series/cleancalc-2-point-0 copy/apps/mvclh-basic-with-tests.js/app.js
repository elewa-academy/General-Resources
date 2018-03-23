// require everything
var model = require('../../components/models/basic-mvclh-model');
var view = require('../../components/views/simple-terminal-view');
var controller = require('../../components/controllers/basic-mvclh-controller');
var logic = require('../../components/logics/basic-mvclh-logic');
var handler = require('../../components/handlers/terminal-handler-object');

// build everything
controller.model = model;
controller.view = view;
controller.logic = logic;

var app = {
	handler,
	controller,
	add: function() {
		var args = handler.handle();
		controller.add(args[0], args[1]);
	}
}

// run the app
app.add();

