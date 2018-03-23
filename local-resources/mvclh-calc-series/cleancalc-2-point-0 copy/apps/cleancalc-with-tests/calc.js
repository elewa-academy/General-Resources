var controller = require('../../components/controllers/cleancalc');
var handler = require('../../components/handlers/terminal-handler-function');
var view = require('../../components/views/simple-terminal-view');

var args = handler();

var num1 = Number(args[1]);
var num2 = Number(args[2]);

var result = controller.operate(args[0], num1, num2);

view.render(result);