//  write a few unit tests for changeSchema and proceed to build up a passing method.
//  there is not need to modify any other method while working in this file

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
			// code
			return message;
		},
	operate: function(opName, a, b, c) {
			var message = 'operate placeholder';
			var result = 0000;
			// code
			return [message, result];
		},
	changeSchema: function(newSchema) {
			var message = 'changeSchema placeholder';
			// code
			return message;
		}
};


// ---------------------  challenge  ----------------------------

function changeSchemaUnitTest(calcToTest) {
	var testSchema = {yo: 'yo'};
	var message = '';
	calcToTest.changeSchema(testSchema);
	if (calcToTest.schema == testSchema) {
		message += 'successfully added new schema';
	} else {
		message += 'failed to add new schema';
	};
	return message;
};

console.log(changeSchemaUnitTest(schemaCalc));


