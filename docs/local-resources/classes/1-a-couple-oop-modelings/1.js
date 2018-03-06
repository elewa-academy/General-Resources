// Object Oriented Programming?   "Data with functionality"
// It's not a good idea to write whole javascript programs with OOP
//	but many components of your program may be written as objects
// Consider using objects if:
//		You have many similar "things" with different values


// a bank account class - all bank accounts do the same thing to different values
//		all bank accounts do the same thing, but to different people's money
class OGaccountClass1 {
	constructor(money, person) {
		this.cash = money;
		this.person = person;
	}
	// all methods are stored in the class, not the objects it makes
	// this is an efficient thing: 
	//		each bank account object rememebers only how it differs, it's money and person
	changeCash(deltaCash) {
		this.cash = this.cash + deltaCash;
	}
	displayCash() {
		console.log('i has this many monies: ' + this.cash);
	}
};

// a puppy class and its specs ---
// class puppy:
	// a class to produce basic puppies
// properties:
	// color: the color of the cute puppy
	// weight: the weight of the cute puppy
	// isCute: that the puppy is cute
// methods: 
	// changeCuteness: a method to access and change the cuteness of your puppy
		// args: anything
		// return value: true
		// it does: converts arg to null, resets isCute to true and returns true	

class Puppy {
	constructor(color, weight) {
		this.color = color;
		this.weight = weight;
		this.isCute = true;
	}
	changeCuteness(arg) {
		arg = null;
		this.isCute = true;
		return true;
	} 
}