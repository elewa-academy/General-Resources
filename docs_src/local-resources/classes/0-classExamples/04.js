// phase 2:  Inheritance
// lettuce take a look at what lives where

// when methods are defined in the body of the class, they don't appear on the offspring
// 	but can still be used by the offspring
// this is called Inheritance
class OGaccountClass1 {
	constructor(money) {
		this.cash = money;
	}
	changeCash(deltaCash) {
		this.cash = this.cash + deltaCash;
	}
	displayCash() {
		console.log('i has this many monies: ' + this.cash);
	}
};

var accObj1 = new OGaccountClass1(6);
console.log(accObj1);

console.log(accObj.changeCash);
// accObj1 does not have the method, but still can use it
accObj1.changeCash(5);
accObj1.displayCash();

//----------------------------------------//

// when methods are defined in the constructor, they appear on the offspring
class OGaccountClass2 {
	constructor(money) {
		this.cash = money;
		this.changeCash = function(deltaCash) {
				this.cash = this.cash + deltaCash;
			};
		this.displayCash = function() {
				console.log('i has this many monies: ' + this.cash);
			};	
	}
};

var accObj2 = new OGaccountClass2(6);
console.log(accObj2);
console.log(accObj.changeCash);
// and of course the object can use it
accObj2.changeCash(5);
accObj2.displayCash();