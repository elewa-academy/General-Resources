// the function you're passing in is also just a function
// it can take arguments
// --- in javascript, a function is a function wherever it is ---

function higherOrder(stringIprint, stringItPrints, argFunc) {
	console.log(stringIprint);
	argFunc(stringItPrints);
};

function argumentFunction(stringToPrint) {
	console.log(stringToPrint);
};

higherOrder('im high', 'im an arg', argumentFunction);