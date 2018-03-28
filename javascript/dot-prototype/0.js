/*
all objects do what's called inheriting
inheriting is when an object has properties you didn't give it

this works because the objects inherits methods it doesn't own.
if you didn't give an object a property but it has it, 
that means it's prototype does
*/


var arr = [];
arr.splice(); // did you ever write this method?  nope
Object.getOwnPropertyNames(arr); // this will only print properies directly connected to an object
arr.newProp = 'newProp'
Object.getOwnPropertyNames(arr); // a new one!
arr.splice = function() {console.log('new splice')}; // another new one
arr.splice(); // neat.  if an object has a property, javascript doens't go to it's prototype
Object.getOwnPropertyNames(arr);