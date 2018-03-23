var tester = require('../../testing-tools');
var logic = require('../../components/logics/basic-mvclh-logic');

var model = require('../../components/models/basic-mvclh-model');
var view = require('../../components/views/basic-terminal-view');
var controller = require('../../components/controllers/basic-mvclh-controller');
controller.model = model;
controller.view = view;
controller.logic = logic;

var add_cases = [
    { args: [3, 3], expected: 6, name: '+/+: 3+3' },
    { args: [-3, -3], expected: -6, name: '-/-: -3+-3' },
    { args: [3, -3], expected: 0, name: '+/-: 3+-3' },
    { args: [-3, 3], expected: 0, name: '-/+: -3+3' },
    { args: [3, 0], expected: 3, name: 'non-0/0: 3+0' },
    { args: [0, 3], expected: 3, name: '0/non-0: 0+3' }
];

var results = [];

results.push(['tesing logic module', tester.test(logic.add, add_cases)]);

console.log(results);

console.log('testing app:');

for(var test_case of add_cases) {
	console.log(test_case.name);
	console.log('   expected: ' + test_case.expected);
	console.log('got: ');
	controller.add(test_case.args[0], test_case.args[0]);
	console.log();
}; 
