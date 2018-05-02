// replace the cb with an es6 function
// read documentation for the HOF instead of looking at it's source code
// and that's real node development
//    (we use es6 functions because they create closures. 
//		don't worry too much about this for now, just use it)

var module = require('./moduleSide12');

module.higherOrder(4, 5, (err, argument) => {
	if(err) {
		console.log(err);
	} else {
		console.log(argument);
	};
});

module.higherOrder(4, '5', (err, argument) => {
	if(err) {
		console.log(err);
	} else {
		console.log(argument);
	};
});

//  some documentation for the module
/*
module91: object
	methods: 1
		higherOrder: function
			args: 3
				args 1 and 2: numbers
					purpose: to be added together
				cb: function
					purpose: to be executed with an error and the result
			return: undefined - sort of.  
					what would be the return value becomes the second argument in the callback
			behavior: checks args types. if they're not numbers, set err to true
						else do the math. then calls cb with err and result
			purpose:  an addition module
*/





