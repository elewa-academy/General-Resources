// let's move the error checking to the callback

function higherOrder(arg1, arg2, callBack) {
	var result = null;
	result = arg1 + arg2;
	callBack(result);
};

function callBack(argument) {
	if(typeof argument == 'number') {
		console.log(argument);
	} else {
		console.log('result aint no number');
	};
};

higherOrder(4, 5, callBack);
higherOrder(4, '5', callBack);