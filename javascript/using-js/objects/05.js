// 	add a functionality:  default account creation.
//		if no account is passed in, create a new account with the passed value


var accObj0 = {cash: 0};

// now has default account creation
function changeCash(money, oldAccount) {
	var newAccount = {cash: 0};
	// checks to see if oldAccount was passed in
	if (oldAccount == undefined) {
		newAccount.cash = money;
	}
	else {
		newAccount.cash = oldAccount.cash + money;
	}
	return newAccount;
};


// --------------------------- //

var newAccObj1 = changeCash(6);
console.log(newAccObj1);

newAccObj1 = changeCash(-3, newAccObj1);
console.log(newAccObj1);

var newAccObj2 = changeCash(6);
console.log(newAccObj2);

newAccObj2 = changeCash(-3, newAccObj1);
console.log(newAccObj2);







