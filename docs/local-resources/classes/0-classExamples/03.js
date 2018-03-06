//	the same constructor function as in banksy.10 but using class syntax
//  the comparison between the class and the pure javascript is not quite right
//			can you figure out why?

class OGaccountClass {
	constructor(money) {
		this.cash = money;
	}
	changeCash(deltaCash) {
		this.cash = this.cash * deltaCash;
	}
	displayCash() {
		console.log('i has this many monies: ' + this.cash);
	}
};

var accObj1 = new OGaccountClass(6);
console.log(accObj1.cash)

// ---------------------------------- //
// for comparison, here's the same thing in plain javascript

var OGaccount = function(money) {
	this.cash = money;
	this.changeCash = function(deltaCash) {
			this.cash = this.cash + deltaCash;
		};
	this.displayCash = function(){
			console.log('i has this many monies: ' + this.cash);
		};
};

var accObj2 = new OGaccount(6);
console.log(accObj2.cash)

// ---------------------------------- //
// or even simpler javascript

var accountGenerator = function(money) {
	// identical to the object in 8.js
	var newAccount = {};
	newAccount.cash = money;
	newAccount.changeCash = function(deltaCash) { this.cash = this.cash + deltaCash };
	newAccount.displayCash = function(){ console.log('i has this many monies: ' + this.cash) };
	return newAccount;
}

var accObj3 = accountGenerator(6)
console.log(accObj3.cash)
