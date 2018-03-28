/*
how did this happen?  
all objects inherit from another object
builtin types (arr, object, funciton, ...) inherit from builtin objects


using the keyword 'new' is a way for you to decide an object's prototype
the new object inherits from the function's '.prototype' method
*/

var arr = [];
console.log(arr.__proto__);

var lonelyObject = {};
console.log(lonelyObject.__proto__);

var 



