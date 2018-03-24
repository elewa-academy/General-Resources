Tricky JavaScript
====

### Strict equality

In JS you can compare if two variables are equal by using either two equal (==) signs or three (===). So what's the difference? In most cases you won't have to worry about the difference, but for good practice it is recommended to use strict equality (===) by default.

Strict Equality compares the values ***AND*** their datatypes for equality.

Let's say I have two variables: `var a = 2 and var b = "2"`. 

As you can see var a is **number**, while var b is a **string**. They are both different datatypes, however, var b can be interpreted as a number.

What would happen if we use Strict Equality and what if we don't?

Without strict equality the statement `a == b` will return _true_. Javascript will only check the values of the variables and ignore the datatype.

Most of the times we don't want this to be _true_ and we want to check for datatype as well. That's why we use Strict Equality: `a === b` will return _false_

### Null does not mean 0

You may be tempted to think the _null_ keyword to mean 0, however you would be mistaken. _Null_ simply means 'Empty', no value. So you wouldn't be able to do any arithmetical operations with a variable evaluating as _null_.

### Truthy and falsy values
Booleans can sometimes be hard to grasp and I would recommend everyone to spend ample amount of time studying it.

A Boolean _primitive_ can be true or false. However there are also values that will be evaluated as such even if they're not Boolean primitives.

Let's run the following statements in your browser:

```javascript
console.log(0 == false);
console.log(null == undefined);
console.log('' == 0);
console.log({} == true);
console.log([] == true);
```
All of the above will evaluate as _true_!

0, '' (empty string), null, undefined, ... are so called falsy values and will always return as false. This can be useful if you want to check if a variable is empty or not:

```javascript
var myString = "some string";
// some code
if (myString){  // if myString would be '' this would evaluate as false and this code would not run. In any other case the code would run
    // do something
}
```

But the last two examples (the empty array and empty object) are _truthy_ despite being empty, why is that? Both {} and [] are in fact objects and any object will be coerced to a boolean value of true in JavaScript.

### isNaN(9) is false
A common mistake is when checking for numbers is using a number as an argument for the "Is **Not** a Number" method. 9 is in fact a number so this will return false. In this case you would need: "Is _not_ **Not** a Number", which you can achieve by putting an exclamation mark before isNaN.

### var, let, const and scope
Since ES6 there are two new ways to declare a variable: let and const. So what's the difference with good old var? 
Well, the difference lies in the _scope_. 

Let's try something out. Let's say we have this simple loop:

```javascript
for (var i = 0; i < 10; i++){
    console.log(i);
}
console.log("After the loop i = " + i);
```
What do you think _i_ will be in the second console.log? 

If you said 10, you're correct. Let's break this down. We want a loop to run as long as _i_ is _less than_ 10, so that means excluding 10. The loop will run and will print out: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.

However, after the loop has finished we ask for the value of _i_ again. This time it will return 10. Before the loop prints out the value of _i_ it evaluates if the condition has been met ( is _i_ less than 10). So when i becomes 10, the condition evaluates as false and the loop ends. However, **i == 10** remains in memory!

This is called [variable hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting).

You might think that _i_ only exists inside the loop block, but that's not the case. Whenever or wherever **var** has been declared, it will be _hoisted_ to the top of the global code or the function code.

To avoid this behavior, let and const have been _invented_. The same code with let will now throw an error after the second console.log:

```javascript
for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log("After the loop i = " + i);
```

Let and const are **block scope** variables, which means they only exist in the block within they have been declared. In this case, _i_ will only exist **inside** the loop _block_.

### Identical objects are not the same

```javascript
var obj1 = {a: 1, b: 2};
var obj2 = {a: 1, b: 2};

var obj3 = obj1;
```

If you would compare obj1 to obj2 you'd probably expect Javascript to tell you these are the same. Only, they're not... Separately declared objects, even when their key-value pairs are identical, refer to different addresses in memory. So as far as JS is concerned, these are two different variables.

However, when you use assignment you also duplicate the pointer to the memory block. That's why evaluating `obj3 === obj1` will return as true.

#### Not too deep cloning
You can use the `Object.assign(object)` to make a clone of an existing object. This could be particularly useful to make sure you're not by accident manipulating the existing object, with nasty bugs as result.

However, this method only goes so far...

```javascript
var obj4 = {a: 1, b : {c : 2}};
var obj5 = Object.assign({}, obj4);

obj4 === obj5 // will return false
obj5.b.c++;
console.log(obj4.b) // will now return {c: 3}!!!
```

So Object.assign makes a clone of a object with its enumerables and its properties. However, nested objects have their own addresses in memory. So even after cloning, the nested objects are still pointing to the same address of the original one.


External resources
----

Here you'll find some resources about some more trickier concepts regarding JavaScript. 

+ http://javascript.info/javascript-specials

+ http://www.thatjsdude.com

+ https://www.toptal.com/javascript/10-most-common-javascript-mistakes

+ https://bonsaiden.github.io/JavaScript-Garden/

+ http://www.thatjsdude.com/interview/js2.html

+ https://wtfjs.com

+ if you have programming experience : http://spencertipping.com/js-in-ten-minutes/js-in-ten-minutes.pdf

+ [Object coersion](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>