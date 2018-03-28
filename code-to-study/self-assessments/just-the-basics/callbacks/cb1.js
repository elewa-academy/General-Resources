function arrayReverserModuleSide(arrayToReverse, cb) {
	// write this code
};

arrayReverserModuleSide([3, 4, 5, 6, 7], cb(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	};
});  // -> [7, 6, 5, 4, 3]

arrayReverserModuleSide({3, 4, 5, 6, 7}, cb(err, result) {
	if(err) {
		console.log(err);
	} else {
		console.log(result);
	};
});  // -> argument was not an array

