var tester = require('../../testing-tools');
var calc = require('../../components/controllers/cleancalc');

var add_cases = [
    { args: [3, 3], expected: 6, name: '+/+' },
    { args: [-3, -3], expected: -6, name: '-/-' },
    { args: [3, -3], expected: 0, name: '+/-' },
    { args: [-3, 3], expected: 0, name: '-/+' },
    { args: [3, 0], expected: 3, name: 'non-0/0' },
    { args: [0, 3], expected: 3, name: '0/non-0' }
];
var sub_cases = [
    { args: [3, 3], expected: 0, name: '+/+' },
    { args: [-3, -3], expected: 0, name: '-/-' },
    { args: [3, -3], expected: 6, name: '+/-' },
    { args: [-3, 3], expected: -6, name: '-/+' },
    { args: [3, 0], expected: 3, name: 'non-0/0' },
    { args: [0, 3], expected: -3, name: '0/non-0' }
];
var mult_cases = [
    { args: [3, 3], expected: 9, name: '+/+' },
    { args: [-3, -3], expected: 9, name: '-/-' },
    { args: [3, -3], expected: -9, name: '+/-' },
    { args: [-3, 3], expected: -9, name: '-/+' },
    { args: [3, 0], expected: 0, name: 'non-0/0' },
    { args: [0, 3], expected: 0, name: '0/non-0' }
];
var div_cases = [
    { args: [3, 3], expected: 1, name: '+/+' },
    { args: [-3, -3], expected: 1, name: '-/-' },
    { args: [3, -3], expected: -1, name: '+/-' },
    { args: [-3, 3], expected: -1, name: '-/+' },
    { args: [3, 0], expected: undefined, name: 'non-0/0' },
    { args: [0, 3], expected: 0, name: '0/non-0' }
];

var add = (a, b) => {
	return calc.operate('add', a, b);
};
var sub = (a, b) => {
	return calc.operate('subtract', a, b);
};
var mult = (a, b) => {
	return calc.operate('multiply', a, b);
};
var div = (a, b) => {
	return calc.operate('divide', a, b);
};

var results = [];
results.push(['addition', tester.test(add, add_cases)]);
results.push(['subtraction', tester.test(sub, sub_cases)]);
results.push(['multiplication', tester.test(mult, mult_cases)]);
results.push(['division', tester.test(div, div_cases)]);

console.log(results);
