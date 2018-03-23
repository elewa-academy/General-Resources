//  focus on changeSchema, leave all others dummy.
//  this is the simplest method in the project and a clean introduction to 'this'

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
			this.operations[newOp.name] = newOp;
			return message;
		},
	operate: function(opName, a, b, c) {
			var message = 'operate placeholder';
			var result = 0000;
			result = this.operations[opName].operation(a, b, c);
			return [message, result];
		},
	changeSchema: function(newSchema) {
			var message = 'changeSchema placehoder';
			// code
			return message;
		}
};
