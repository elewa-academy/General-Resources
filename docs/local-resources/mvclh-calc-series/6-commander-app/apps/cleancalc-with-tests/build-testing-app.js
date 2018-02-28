// require everything
let cleancalc = require('../../components/controllers/cleancalc');
let view = require('../../components/views/basic-terminal-view');

cleancalc;


let app = { // closure!
	operate: function(operation, arg1, arg2) {
		let result =  cleancalc.operate(operation, arg1, arg2);
		view.render(result);
	}
};

module.exports = app;
