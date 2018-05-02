// nothing is one-size fits all
// some control over how the callback is used might be nice

function higherOrder(arg1, arg2, callBack) {
	if((typeof arg1 == 'number') &&  (typeof arg2 == 'number'))	{
		var result = null
		result = arg1 + arg2;
		callBack(result);
	} else {
		callBack('use real numbers');
	};
};

function callBack(stringToPrint) {
	console.log(stringToPrint);
};

higherOrder(4, 5, callBack);
higherOrder(4, '5', callBack);

function notHigherOrder()

function followup()