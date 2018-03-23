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
			// code that uses your schematizer and some extra logic
			// pending the schematizer's decision, do different things
			// for now, just add anything
			this.operations[newOp.name] = newOp;
			return message;
		},
	operate: function(opName, a, b, c) {
			var message = 'operate placeholder';
			var result = 0000;
			// code to check if this operation exists
			// for now just use whatever is passed in
			result = this.operations[opName].operation(a, b, c);
			return [message, result];
		},
	changeSchema: function(newSchema) {
			var message = 'changeSchema placehoder';
			// code
			this.schema = newSchema;
			return message;
		}
};


