let logic = require('../../components/logics/basic-mvclh-logic');
let tester = require('../../testing-tools');

let add_cases = [
    { args: [3, 3], expected: 6, name: '+/+: 3+3' },
    { args: [-3, -3], expected: -6, name: '-/-: -3+-3' },
    { args: [3, -3], expected: 0, name: '+/-: 3+-3' },
    { args: [-3, 3], expected: 0, name: '-/+: -3+3' },
    { args: [3, 0], expected: 3, name: 'non-0/0: 3+0' },
    { args: [0, 3], expected: 3, name: '0/non-0: 0+3' }
];

let results = [];

results.push(['tesing logic module', tester.test(logic.add, add_cases)]);

console.log(results);
