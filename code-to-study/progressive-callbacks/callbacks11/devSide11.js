// what if we defined the callback in place

var module = require('./moduleSide11');

module.higherOrder(4, 5, function(err, argument) {
	if(err) {
		console.log(err);
	} else {
		console.log(argument);
	};
});

module.higherOrder(4, '5', function(err, argument) {
	if(err) {
		console.log(err);
	} else {
		console.log(argument);
	};
});