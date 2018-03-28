var modelConstructor = require('model-constructor');
var View = require('./views/view');
var Controller = require('./controllers/calcUser');

var operationSchema = {
	name: {
		type: 'string',
		fallback: 'akermann'
	},
	args: {
		type: 'number',
		fallback: 2
	},
	operation: {
		type: 'function',
		fallback: 'A(x, y)'
	}
};
var operationsModel = modelConstructor(operationSchema);

var add = {
    name: 'add',
    numArgs: 2,
    operation: function(a, b) {
        return a + b;
    }
};
var subtract = {
    name: 'subtract',
    numArgs: 2,
    operation: function(a, b) {
        return a - b;
    }
};
var mulitply = {
    name: 'multiply',
    numArgs: 2,
    operation: function(a, b) {
        return a * b;
    }
};
var divide = {
    name: 'divide',
    numArgs: 2,
    operation: function(a, b) {
        return a / b;
    }
};
operationsModel.add(add, ()=>{});
operationsModel.add(subtract, ()=>{});
operationsModel.add(mulitply, ()=>{});
operationsModel.add(divide, ()=>{});


var vw = new View('yo there ');
var cn = new Controller(operationsModel, vw)


module.exports = cn;


