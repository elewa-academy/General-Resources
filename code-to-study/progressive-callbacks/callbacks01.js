// the higher order function can do anything else a normal function would
// it's still just a function too

function higherOrder(argFunc) {
	console.log('im high');
	argFunc();
	return argFunc;
};

function argumentFunction() {
	console.log('im an arg');
};

higherOrder(argumentFunction);
console.log(higherOrder(argumentFunction));


