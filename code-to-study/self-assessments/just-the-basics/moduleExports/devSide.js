// your module code should satisfy this script

var module = require('./moduleSide');

for (var i = 0; i < 5; i++) {
	module.push(i);
};

console.log('------- should print [0, 1, 2, 3, 4] --------');
console.log(module.data);

var spliced = module.splice(2); 
console.log('------- should print [3, 4] --------');
console.log(spliced); 
console.log('------- should print [0, 1, 2, 3] --------');
console.log(module.pop()); 
console.log('------- should print [] --------');
console.log(module.clear()); 

for (var i = 0; i < 5; i++) {
	module.push(i);
};
console.log('------- should print [0, 1, 2, 3, 4] --------');
console.log(module.getData());
console.log('------- should print [3] --------');
console.log(module.splice(2, 1)); // -> [3]
