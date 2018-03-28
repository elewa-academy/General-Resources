var unit_test = require('./unit-test');
var unit_runner = require('./unit-runner');
var result_interpreter = require('./result-interpreter');

var testing_module = {
	unit_test,
	unit_runner,
	result_interpreter,
	test: function(testee, cases) {
		var results = this.unit_runner(this.unit_test, testee, cases);
		var interpreted = this.result_interpreter(results, cases);
		return interpreted
	}
};

module.exports = testing_module;

