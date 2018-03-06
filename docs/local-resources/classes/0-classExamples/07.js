// Phase 4: classes inheriting from classes
// just as offspring inherit from their class, classes can inherit from classes
// this is done with the key word 'extends'

class OGaccountClass {
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

class newGangserClass extends OGaccountClass {
	isThug() {
		console.log('yes i am');
	}
};

var OG = new OGaccountClass(4);
var NG = new newGangserClass(3);

// offspring of extended classes have access to parent-parent methods
OG.changeCash(100);
NG.changeCash(100);

// they also take values from the parent-parent constructor
console.log(OG.cash);
console.log(NG.cash);

// extended classes will be regular classes + 
OG.isThug();
NG.isThug();