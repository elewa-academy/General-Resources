// static methods are a special type of method in OOP
// So far we have only used instances to build apps, and classes to build instances
// with static methods you can use the class itself to execute logic in your app
// you will use static methods when there is an action related to your class, but not to any instance in particular

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
	static getBankName() {
		return 'OG Sachs';
	}
};

var accObj1 = new OGaccountClass(6);

console.log(accObj1.getBankName());
console.log(OGaccountClass.getBankName());
