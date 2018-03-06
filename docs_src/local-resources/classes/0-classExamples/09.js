// extends classes can also have constructors that extend parent constructors

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

// refer to super's constructor
class newGangserClass extends OGaccountClass {
	constructor(money, feet) {
    // two different constructors to try out	

    	// // this is necessary to set the class's money
    	// // try commenting it out and replacing it with this: this.cash = money;
    	// super(money);
    	// this.feet = feet;

  //   	// completely ignoring the super's constructor
		// // but it still needs to be called
		// super()
		// // try defining 'cash' in the super instead and watch the log of finalG
		// this.cash = money;
  //   	this.feet = feet;
  	}
	hasFeet() {
		console.log(this.feet);
	}
};

// or overwrite super's methods
class newGangserClassOverwrite extends OGaccountClass {
	constructor(money, feet) {
		this.money = 4 + money;
		this.feet = feet - 1;
  	}
	hasFeet() {
		console.log(this.feet);
	}
};

var finalG = new newGangserClass(3, 4);
var finalGoverwrite = new newGangserClassOverwrite(7, 8);

console.log(finalG)