// a more challenging cow class

class cowClass {
	constructor(name, fullness) {
		this.age = 0;
		this.name = name;
		this.fullness = fullness;
		this.isDead = false;
	}
	amIdead() {
		if (this.fullness < 0) {
			this.isDead = true;
		} else {
			this.isDead = false;
		};
		return this.isDead;
	}
	eat(food) {
		this.fullness += food;
	}
	move(around) {
		this.fullness -= around;
	}
	getAge() {
		return this.age + this.__proto__.years; 
	}
	static ageAllCows(years) {
		this.prototype.years += years;
	}
}
cowClass.prototype.years = 0;

// -----------------

var COW = new cowClass('evan', 4);
console.log(COW.amIdead());
console.log(COW.fullness);
COW.eat(4);
console.log(COW.fullness);
COW.amIdead();
console.log(COW.isDead);
COW.move(54);
console.log(COW.fullness);
COW.amIdead();
console.log(COW.isDead);
//----------------
console.log(COW.__proto__);
console.log(COW.getAge());
cowClass.ageAllCows(3);
console.log(COW.__proto__);
console.log(COW.getAge());
//----------------
var COW0 = new cowClass('evan', 4);
var COW1 = new cowClass('eva', 6);
var COW2 = new cowClass('ev', 8);
console.log(COW0.name + "  " + COW0.getAge());
console.log(COW1.name + "  " + COW1.getAge());
console.log(COW2.name + "  " + COW2.getAge());
cowClass.ageAllCows(3);
console.log(COW0.name + "  " + COW0.getAge());
console.log(COW1.name + "  " + COW1.getAge());
console.log(COW2.name + "  " + COW2.getAge());


