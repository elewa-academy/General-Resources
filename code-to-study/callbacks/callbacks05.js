// why not pass the argFunc your result?
// sort of replacing a return statement with your callback function

// asynch version
function higherOrder(arg1, arg2, callBack) {
	var result = 0000;
	result = arg1 + arg2;
	callBack(result);
	// return result
};

function callBack(stringToPrint) {
	console.log(stringToPrint);
};

higherOrder(4, 5, callBack);

//   alternative with similar behavior, but synchronous

function notHigherOrder(arg1, arg2) {
	var result = 0000;
	result = arg1 + arg2;
	return result;
};

function followUp(stringToPrint) {
	console.log(stringToPrint);
};

var result = notHigherOrder(4, 3);
followUp(result);












