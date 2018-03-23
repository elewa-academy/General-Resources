let app = require('./build-testing-app');

app.operate("add", 3, 4)

let add_cases = [
    { args: [3, 3], expected: 6, name: '+/+' },
    { args: [-3, -3], expected: -6, name: '-/-' },
    { args: [3, -3], expected: 0, name: '+/-' },
    { args: [-3, 3], expected: 0, name: '-/+' },
    { args: [3, 0], expected: 3, name: 'non-0/0' },
    { args: [0, 3], expected: 3, name: '0/non-0' }
];
let sub_cases = [
    { args: [3, 3], expected: 0, name: '+/+' },
    { args: [-3, -3], expected: 0, name: '-/-' },
    { args: [3, -3], expected: 6, name: '+/-' },
    { args: [-3, 3], expected: -6, name: '-/+' },
    { args: [3, 0], expected: 3, name: 'non-0/0' },
    { args: [0, 3], expected: -3, name: '0/non-0' }
];
let mult_cases = [
    { args: [3, 3], expected: 9, name: '+/+' },
    { args: [-3, -3], expected: 9, name: '-/-' },
    { args: [3, -3], expected: -9, name: '+/-' },
    { args: [-3, 3], expected: -9, name: '-/+' },
    { args: [3, 0], expected: 0, name: 'non-0/0' },
    { args: [0, 3], expected: 0, name: '0/non-0' }
];
let div_cases = [
    { args: [3, 3], expected: 1, name: '+/+' },
    { args: [-3, -3], expected: 1, name: '-/-' },
    { args: [3, -3], expected: -1, name: '+/-' },
    { args: [-3, 3], expected: -1, name: '-/+' },
    { args: [3, 0], expected: undefined, name: 'non-0/0' },
    { args: [0, 3], expected: 0, name: '0/non-0' }
];

console.log('testing app:');

for(let test_case of add_cases) {
    console.log(test_case.name);
    console.log('expected:');
    console.log(test_case.expected)
    console.log('got:');
    app.operate("add", test_case.args[0], test_case.args[1]);
    console.log('---------');
}; 

console.log("------\n------");

for(let test_case of sub_cases) {
    console.log(test_case.name);
    console.log('expected:');
    console.log(test_case.expected)
    console.log('got:');
    app.operate("subtract", test_case.args[0], test_case.args[1]);
    console.log('---------');
}; 

console.log("------\n------");

for(let test_case of mult_cases) {
    console.log(test_case.name);
    console.log('expected:');
    console.log(test_case.expected)
    console.log('got:');
    app.operate("multiply", test_case.args[0], test_case.args[1]);
    console.log('---------');
}; 

console.log("------\n------");

for(let test_case of div_cases) {
    console.log(test_case.name);
    console.log('expected:');
    console.log(test_case.expected)
    console.log('got:');
    app.operate("divide", test_case.args[0], test_case.args[1]);
    console.log('---------');
}; 

