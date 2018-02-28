//  with a function
// still not true OOP -> the functionality needed to modify the 'cash' is stored outside of the object

var accObj = {cash: 0};

// takes positive or negative numbers and updates the account
function changeCash(money) {
	accObj.cash = accObj.cash + money;
};



// -------------------------------- //

console.log(accObj.cash);

changeCash(1); 

console.log(accObj.cash);

changeCash(-1);

console.log(accObj.cash);