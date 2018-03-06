// we now have what it necessary to generalize what we learned in 5
// 	anything 'downstream' can overwrite anything 'upstream'

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

var finalG = new newGangserClass(3);

// adding printIt from top class
OGaccountClass.prototype.printIt = function() {console.log('OGclass')};
finalG.printIt();

// overwriting printIt from exteded class
newGangserClass.prototype.printIt = function() {console.log('NGclass')};
finalG.printIt();

// overwriting from the object itself
finalG.printIt = function() {console.log('finalG')};
finalG.printIt();
