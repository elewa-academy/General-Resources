// hi there
// in javascript, functions can take other functions as arguments.
// they can even call these functions like anywhere else
// functions that do this are called 'higher order functions'


function higherOrder(argFunc) {
	argFunc();
};

function argumentFunction() {
	console.log('im an arg');
};

higherOrder(argumentFunction);


// notice where there are parenthesis and where there aren't