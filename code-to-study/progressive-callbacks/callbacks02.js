// the HOF can also take any other arguments you please

function higherOrder(stringToPrint, argFunc) {
	console.log(stringToPrint);
	argFunc();
};

function argumentFunction(string) {
	console.log(string);
};

higherOrder('im high', argumentFunction);


