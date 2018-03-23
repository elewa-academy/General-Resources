//  with a PURE FUNCTION, the first big leap
//  
//	pure functions: 
//		- do not modify anything in the global scope
//		- are passed all the information they need to operate
//		- return the product of their labor to the global scope as a new object
//		- (except console.logs, they can use outside variables)
// 	
//	using pure functions will make it easier to understand and write
//	more complicated programs as well as prevent a certain kind of bug ('side effects')
//	
//	A nice article with nice examples:
//		http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/

var accObj0 = {cash: 0};

// takes positive or negative number and the account to modify
// it will return a new, updated account object
function changeCash(money, oldAccount) {
	var newAccount = {};
	// assigning a value to a non-existent key will add the property
	newAccount.cash = oldAccount.cash + money;
	return newAccount;
};


// -------------------------------- //
console.log(accObj0.cash);
//  changeCash returns a new, updated object
var accObj1 = changeCash(1, accObj0); 
// leaving accObj0 unchanged
console.log(accObj0.cash + ", " + accObj1.cash);

// -------------------------------- //
// to update accObj0, reassign it at global scope
accObj0 = changeCash(1, accObj0);
// same behavior as in 3.js but with better programming
console.log(accObj0.cash);







