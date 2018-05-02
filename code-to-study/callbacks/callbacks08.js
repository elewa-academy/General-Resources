// only this isn't so general purpose
// let's find a design pattern that will work in all cases

function higherOrder(arg1, arg2, callBack) {
	var err = null;
	var result = null;
	if((typeof arg1 == 'number') &&  (typeof arg2 == 'number'))	{
		result = arg1 + arg2;
		callBack(err, result);
	} else {
		err = true;
		callBack(err, result);
	};
};

function callBack(err, argument) {
	// if there was an error, don't use arguments
	//   it would break your code
	if(err) {
		console.log('result aint no number');
	} else {
		console.log(argument);
	};
};

higherOrder(4, 5, callBack);
higherOrder(4, '5', callBack);