let app = require('./build-testing-app');

let add_cases = [
    { args: [3, 3], expected: 6, name: '+/+: 3+3' },
    { args: [-3, -3], expected: -6, name: '-/-: -3+-3' },
    { args: [3, -3], expected: 0, name: '+/-: 3+-3' },
    { args: [-3, 3], expected: 0, name: '-/+: -3+3' },
    { args: [3, 0], expected: 3, name: 'non-0/0: 3+0' },
    { args: [0, 3], expected: 3, name: '0/non-0: 0+3' }
];

console.log('testing app:');

for(let test_case of add_cases) {
	console.log(test_case.name);
	console.log('expected:');
    console.log(test_case.expected)
	console.log('got:');
	app.add(test_case.args[0], test_case.args[1]);
	console.log('---------');
}; 

