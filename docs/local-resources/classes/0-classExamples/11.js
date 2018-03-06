// methods for changing the values of a class's properties

class getsNsets {
	constructor(value) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}

	setValue(newValue) {
		this.value = newValue
	}
}

// ----------------


var demo = new getsNsets('niko');

// both ways work, but getters and setters are better practice 

console.log(demo.getValue());
console.log(demo.value);

demo.setValue('nora');

console.log(demo.getValue());
console.log(demo.value);

demo.value = 'nora';

console.log(demo.getValue());
console.log(demo.value);
