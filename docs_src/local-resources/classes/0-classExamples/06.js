//  Phase 3: offspring siblings	
// offspring of the same class have no access to eachother
// doing something to one does absolutely nothing to the others

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

//--------------------------------------------------//

var accObj1 = new OGaccountClass1(6);
var accObj2 = new OGaccountClass1(4);


// just try it
//  see if you can change one from the other