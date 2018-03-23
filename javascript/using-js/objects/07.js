//	OBJECT METHODS:  properties with a function as it's value

var obj = {
	printIt: function(word){console.log(word)}
};

// ------------------------------------  //

// obj.printIt is a function
console.log(obj.printIt)

// and so can be called (almost) like any other function - 
// 		obj.method()

// there are two ways to call methods:
//   .  notation
//   [] notation
// figure out the difference

// .
obj.printIt("yo");

// []
obj["printIt"]("po");
var printIt = 'printIt';
obj[printIt]('jo');



// ------------------------------ //
//		    more . vs []     	  //
// ------------------------------ //


var og = {first: 'fifty', last: 'cent'};

var curtis = 'first';
var jackson = 'last';

// dot notation
console.log(og.first);
console.log(ob.last);

// bracket notation
console.log(og[curtis]);
console.log(og[jackson]);