//	'context' and 'this':  a big leap
// 
// 	'this' is used to set the context of a variable
//		the variable takes the value assigned in the object to the left of the '.' 
//		if there is nothing to the left of the period it looks to scope

// 	'context' is the study of one variable name
//		having different values in different execution scenarios

//	almost like scope, but tied to dynamic behavior
//		rather than source-code blocking	


// simply a function
function learning() {
	// scope
	var variable = 'inner';
	console.log(variable);
	// context
	console.log(this.variable);
	learning.variable = 'property-func';
	console.log(this.variable);
};

// an object with methods
var variable = 'global';
var object = {
	variable: 'property-obj',
	logit: function() {
		var variable = 'inner';
		console.log(variable);
		console.log(this.variable);
	};
};

// play around with these