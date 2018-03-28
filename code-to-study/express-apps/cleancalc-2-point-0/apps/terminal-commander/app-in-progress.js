// https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2
// https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs

var model = require('../../components/models/async-model');
var view = require('../../components/views/terminal-view');
var controller = require('../../components/controllers/async-controller');
var logic = require('../../components/logics/async-logic');
var handler = require('../../components/handlers/commander-handler-terminal');

controller.set('model', model);
controller.set('logic', logic);
controller.set('view', view);

// Assert that a VALID command is provided 
if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  hanlder.outputHelp();
  process.exit();
}

handler.parse(process.argv)