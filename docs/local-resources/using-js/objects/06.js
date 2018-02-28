// 	Introducing:  CONSTRUCTOR FUNCTIONS
// 	
//	The function from 5.js does two things:
//		updates an account's cash money
//		creates a new account if none is passed in

//	lettuce write one function for each task 

//	a factory function is just a function that returns
//		a new object of a particular type.
//	all objects it creates will be identical except for the 
//		amount of cash money they've got
// creating objects on demand with new property values is 
//		central to OOP
// factories are different from constructor functions or classes 
//		- factories do not have inheritance.
//		we'll talk about thsis another day


function accountFacotry(money) {
	var newAccount = {};
	// property assignments will add the property if it didn't exist
	newAccount.cash = money;
	return newAccount;
};

// 	same as before
function changeCash(money, oldAccount) {
	var newAccount = {};
	newAccount.cash = oldAccount.cash + money;
	return newAccount;
};





// --------------------------- //

var bank = [];
for (var i = 0; i < 5; i++) {
	var newBank = accountFacotry(i);
	bank.push(newBank);
};
console.log(bank);

for (var i = 0; i < 5; i++) {
	var newBank = changeCash(i, bank[i]);
	bank.push(newBank);
};
console.log(bank);













