// using an imported callback-consuming function

var module = require('./moduleSide10');

function callBack(err, argument) {
	// if there was an error, don't use arguments
	//   it would break your code
	if(err) {
		console.log(err);
	} else {
		console.log(argument);
	};
};

module.higherOrder(4, 5, callBack);
module.higherOrder(4, '5', callBack);