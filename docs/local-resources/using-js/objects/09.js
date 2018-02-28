//	'scope'

var tim = "globalScope";

function scopeGlobal() {
	console.log(tim);
};

function scope1() {
	var tim = "scope1";
	console.log(tim);
};

function scope2() {
	var tim = "scope2";
	console.log(tim);
};



// ------------------------------//

console.log(tim);
scope1();
scope2();
scopeGlobal();

// let's change 'scopeGlobal's scope to timmy
// 'bind' is a pure function
var timmy = {tim: 'tim'};
scopeGlobal.apply(timmy);
