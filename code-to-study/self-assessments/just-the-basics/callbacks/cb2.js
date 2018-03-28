// convert this code to work with callbacks

function devSideCode(result) {
	if(typeof result != 'number') {
		console.log('argument is not a number');
	} else {
		console.log(result);
	};
};

function importedModule(number1, number2) {
	var result = 0000;
	result = number1 + number2;
	return result;
};

var resultCarrier = importedModule(3, 4);
devSideCode(resultCarrier); // -> 7

var resultCarrier = importedModule(3, 'tim');
devSideCode(resultCarrier); // -> argument is not a number
