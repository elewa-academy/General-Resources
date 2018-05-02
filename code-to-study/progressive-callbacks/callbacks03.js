// the HOF can pass args to the function it was passed

function higherOrder(stringIprint, argFunc) {
	console.log(stringIprint);
	var stringItPrints = 'im an arg';
	argFunc(stringItPrints);
};

function argumentFunction(stringToPrint) {
	console.log(stringToPrint);
};

higherOrder('im high', argumentFunction);


