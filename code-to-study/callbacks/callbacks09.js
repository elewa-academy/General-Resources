// still not so general purpose, the error message is hardcoded

function higherOrder(arg1, arg2, callBack) {
	var err = null;
	var result = null;
	if((typeof arg1 == 'number') &&  (typeof arg2 == 'number'))	{
		result = arg1 + arg2;
		callBack(err, result);
	} else {
		err = 'result aint no number';
		callBack(err, result);
	};
};

function callBack(err, argument) {
	// if there was an error, don't use arguments
	//   it would break your code
	if(err) {
		console.log(err);
	} else {
		console.log(argument);
	};
};

higherOrder(4, 5, callBack);
higherOrder(4, '5', callBack);