// A self-contained bank account!
// with methods that modify the object itself
//   TRUE OOP


// trust the 'this' 
// the next examples will explain it
var accObj = {
	cash: 0,
	changeCash: function(deltaCash) {
		this.cash = this.cash + deltaCash;
	},
	displayCash: function() {
		console.log(this.cash);
	},
	returnCash: function() {
		return this.cash;
	},
	payUp: function(debt) {
		this.cash = this.cash - debt + 1;
		return debt;
	}
};


// ---------------------------------- //

console.log(accObj.cash)

// the object changes it's own cash
accObj.displayCash();
accObj.changeCash(6);
accObj.displayCash();

// and cheats the system
console.log('OG cash:  ' + accObj.cash);
var payed = accObj.payUp(5);
console.log('payed:    ' + payed);
console.log('balance:  ' + accObj.cash);
