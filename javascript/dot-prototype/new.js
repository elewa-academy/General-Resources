// there exists an Object.
// there exists a Function
// all functions pass through functions
// everything passes through Object

function constructorFunc(arg) {
	this.param = arg
	this.__proto__ = constructorFunc.prototype;
	return this;
}

// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

function Foo() {
  if (!(this instanceof Foo)) { return new Foo(); }
}


function twistyAppBuilder(port, runtime_configs) {
	this. /// clone twistyAppBuilder
	// --------------- //
	twistyApp = new tw // use twistyappbuilder
	return twistyApp;
}


// a function that does the same thing if executed or uses new


// With dynamic object extension, object literals and `Object.create()`, we have everything we need