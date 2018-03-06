// methods can also be overwriten by exteding classes

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
	constructor(money, feet) {
		// completely ignoring the super's constructor
		// but it still needs to be called
		super()
		this.cash = money;
    	this.feet = feet;
  	}
  	// --------------------------------- //
  	// super in methods
	changeCash(deltaCash) {
		// gets rich faster
		super.changeCash();
		this.cash = this.cash + deltaCash;
	}
	hasFeet() {
		super.displayCash();
		console.log(this.feet);
	}
};

var finalG = new newGangserClass(3, 4);

finalG.hasFeet();
console.log(finalG)