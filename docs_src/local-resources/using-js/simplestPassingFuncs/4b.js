//  develop 'operate' progressively in this file.

var schemaCalc = {
	operations: {
			sum2: {name: 'sum2', args: 2, operation: function(a, b){return a + b}},
			sum3: {name: 'sum3', args: 3, operation: function(a, b, c){return a + b + c}}
		},
	schema: {
			name: {
				type: 'string',
				fallback: 'ackermann'
			},
			numArgs: {
				type: 'number',
				fallback: 2
			},
			operation: {
				type: 'function',
				fallback: function(){return '1337FAIL'}
			}
		},
	addTo: function(newOp) {
			var message = 'addTo placeholder';
			//code
			return message;
		},
	operate: function(opName, a, b, c) {
			var message = 'operate placeholder';
			var result = 0000;
			// code to check if this operation exists
			// for now just use whatever is passed in
			return [message, result];
		},
	changeSchema: function(newSchema) {
			var message = 'changeSchema placehoder';
			// code
			return message;
		}
};





// ------------------------  challenge  ---------------------------

// test for calling with an existing operation
function operateUnitTest1(calcToTest) {
	var message = '';
	var result = calcToTest.operate('sum2', 3, 4);
	if (result[0] == 'operation sum2 exists, math done.  ') {
		message += 'message successfully built, ';
	} else {
		message += 'message failed to build,  ';
	};
	if (result[1] == 7) {
		message += 'maths done right.';
	} else {
		message += 'maths done wrong';
	};
	return message;
};

// test for calling with a non-existant operation
function operateUnitTest2(calcToTest) {
	var message = '';
	var result = calcToTest.operate('turtle', 3, 4);
	if (result[0] == 'operation turtle doesnt exist, math not done.  ') {
		message += 'message successfully built, ';
	} else {
		message += 'message failed to build,  ';
	};
	if (result[1] == undefined) {
		message += 'maths done right.';
	} else {
		message += 'maths done wrong';
	};
	return message;
};

// tests for calling an existing method with wrong number of args
function operateUnitTest1(calcToTest) {
	var message = '';
	var result = calcToTest.operate('sum2', 3);
	if (result[0] == 'operation sum2 exists, arguments mismatch.  ') {
		message += 'message successfully built, ';
	} else {
		message += 'message failed to build,  ';
	};
	if (result[1] == undefined) {
		message += 'maths done right.';
	} else {
		message += 'maths done wrong';
	};
	return message;
};


