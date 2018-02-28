// require everything
let cleancalc = require('../../components/controllers/cleancalc');
let view = require('../../components/views/basic-terminal-view');
let handler = require('../../components/handlers/cleancalc-terminal-handler');

handler.controller = cleancalc;


let app = { // closure!
	operate: function() {
		let result =  handler.handle();
		view.render(result);
	}
};

module.exports = app;
