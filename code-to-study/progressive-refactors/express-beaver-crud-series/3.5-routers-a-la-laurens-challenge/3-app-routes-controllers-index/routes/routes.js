const homeCallback = require('../controller/home');

function routesAdder(app) {
	app.get('/', homeCallback);
};

module.exports = routesAdder;

