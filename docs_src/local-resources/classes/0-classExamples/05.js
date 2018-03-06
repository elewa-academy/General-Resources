// this is all different if the method is descibed directly on the offspring in the constructor
// methods or properties described on an offspring will not be overwritten

class OGaccountClass1 {
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

//--------------------------------------------------//

var accObj1 = new OGaccountClass1(6);
var accObj2 = new OGaccountClass1(4);
console.log(accObj1);
console.log(accObj2);

// by adding methods or properties to class.prototype you can STILL dynamically modify all offspring
// 	they continue to point to their parent class

//  uncomment these to see something cool
// accObj1.run();
// accObj2.run();
OGaccountClass1.prototype.run = function() {
	console.log('run');
}
accObj1.run();
accObj2.run();

// BUTT you can't overwrite their own methods or properties
accObj1.displayCash();
accObj2.displayCash();
OGaccountClass1.prototype.displayCash = function() {
	console.log('ha');
};
accObj1.displayCash();
accObj2.displayCash();

// methods and properties can also be added post-construction to these objects
// they are just objects after all
accObj1.pillow = 3;
accObj2.pillow = 5;
OGaccountClass1.prototype.pillow = 7;
console.log(accObj1.pillow);
console.log(accObj2.pillow);

var accObj3 = new OGaccountClass1(0);
console.log(accObj3.pillow);
