# Welcome to Inheritance
Inheritance in programming languages is very similar to inheritance in the people world.  If one object inherits from another, that means it behaves an aweful lot like it's 'ancestor' without being identical. JS's approach to inheritance is called '_Protoypical Inheritance_'.

Even if you didn't know it you've been taking advantage of inheritance since day 1.  Arrays are a great example:
```javascript
var array = [0, 1];
var deletedElement = array.splice(0, 1);
console.log(array, deletedElement);
```
Where did '.splice' come from?  You certainly didn't write it.  What happens if you do this:
```javascript
array.splice = function(arg) { console.log(arg) };
array.splice(0, 1);
```
And when you look up the [documentation for '.splice'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) what's all this about 'Array.prototype.splice()'?

The short answer is that 'Array.prototype' is the ancestor of all arrays. All objects have a properyt called '\_\_proto\_\_' that sets that object's ancestor. Because the '\_\_proto\_\_' of all arrays is 'Array.prototype', any methods or properties attached to 'Array.prototype' can be called by any array.  You can _overwrite_ the properties/methods of an object's ancestor by attaching a property/method of the same name directly to the child object.  

Pictures are helpful:  

![](https://cdn-images-1.medium.com/max/1200/1*S9Bi34EoJeYcpxPnH1IycQ.jpeg)

In JS objects are the players, not the game.   The game is objects/prototypes, functions and asynchronicity.  While there are language features that _abstract away_ prototypical inheritance (constructor funcitons, es6 classes), but under the hood there are still just objects pointing at other objects.  For this reason we will be covering pure prototype manipulation.  Hopefully by the end of this long lesson you will not only be able to understand how JS language features are using inheritance but will be able to come up with your own solutions.

[A series of videos from Mr. Funfunfunctional](https://www.youtube.com/watch?v=GhbhD1HR5vk&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub) that complements this markdown lesson.  Recommended.


[TOP](#table-of-contents)
___
___
## Hands On Exploration
When you hear that everything in JS is an object, this is literally true.  If you follow the _prototype chain_ of any native JS type (number, object, funciton, array, ...) you will find that it's oldest ancestor is '[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)'. Object with a Capital "O".  This isn't all theoretical, you can see it for yourself.  Complete these mini-exercises in ChromDev for a preview of coming attractions:
1. An Empty Object:
    1. Create an empty object called 'obj'.
    2. Type 'obj.' in the console, what options appear for autocomplete?
    3. Enter 'obj' in the console, see that arrow to the left of it?  click that. What do you see?
    4. Click on the arrow to the left of '\_\_proto\_\_: Object'.  What do you see?
    5. Enter 'obj.\_\_proto\_\_' in the console.  How does it compare to what you saw in the stpes above?
    6. Enter 'obj.\_\_proto\_\_.\_\_proto\_\_' in the console.
2. An Empty Array:
    1. Create an empty array called 'arr'.
    2. Type 'arr.' in the console, what options appear for autocomplete?
    3. Enter 'arr' in the console, see that arrow to the left of it?  click that. What do you see?
    4. Click on the arrow to the left of '\_\_proto\_\_: Array'.  What do you see?
    5. Click on the arrow to the left of '\_\_proto\_\_: Object'.  What do you see?
    6. Enter 'arr.\_\_proto\_\_' in the console.  How does it compare to what you saw in the stpes above?
    7. Enter 'arr.\_\_proto\_\_.\_\_proto\_\_' in the console.  How does it compare to what you saw in the stpes above?
    8. Enter 'arr.\_\_proto\_\_.\_\_proto\_\_.\_\_proto\_\_' in the console. 
3. An Empty Function:
    1. Create an empty function called 'fun'.
    2. Type 'fun.' in the console, what options appear for autocomplete?
    3. Enter 'fun' in the console, see that arrow to the left of it?  click that. What do you see?
    4. Enter 'fun.\_\_proto\_\_' in the console.  How does it compare to what you saw in the stpes above?
    5. Enter 'fun.\_\_proto\_\_.\_\_proto\_\_' in the console.  How does it compare to what you saw in the stpes above?
    6. Enter 'fun.\_\_proto\_\_.\_\_proto\_\_.\_\_proto\_\_' in the console.
    
Carry on to learn what all this means.    The rest of this chapter will cover the basics of inheritance in [Proto Lookup Chain](#proto-lookup-chain), present some tools for studying inheritance in the wild with [Useful Methods](#useful-methods), and finally provide some [Recommended Practices](#recommended-practices).
    
[TOP](#table-of-contents)
___
### Proto Lookup Chain
What you saw in the exercises above is the _prototype lookup chain_ for 3 primitive types in JS.  When you try to access a method or property that doesn't exist on an object, JS will travel all the way up the lookup chain in search of that keyword before throwing an error. 

Examples are better than words, read em or run em. These examples use a property, what happens if you use a method instead?:
* Adding a property directly to an object:    
    ```javascript
    var ancestor_obj = {}; // lookup chain: ancestor_obj -> Object -> null
    ancestor_obj.prop; // undefined, nothing in this object's lookup chain has a '.prop'
    ancestor_obj.prop = 'prop';
    ancestor_obj.prop; // 'prop' 
    // you've seen this before, it's about time for some insight
    ```
* Setting and using an object's lookup chain:
    ```javascript
    var child_obj = {};// lookup chain: child_obj -> Object.prototype -> null
    child_obj.prop; // undefined, nothing in this object's lookup chain has a '.prop'
    child_obj.__proto__ = ancestor_obj; // This syntax is great for learning, but slow for production.  We will cover better ways of doing this later on in this markdwon.
    child_obj.prop; // 'prop'.  this value lives on ancestor_obj but is accessible to child_obj
    child_obj; // lookup chain: child_obj -> ancestor_obj -> Objec.prototypet -> null 
    ```
* Overwriting an ancestor's property:
    ```javascript
    child_obj.prop; // 'prop'
    child_obj.prop = 'child prop';
    child_obj.prop; // 'child prop'
    ```

Everything in JS has a '.\_\_proto\_\_' property, this property determines the next stop in it's _lookup chain_.  The next stop also has a '.\_\_proto\_\_', and so on until you reach [The Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) whose '.\_\_proto\_\_' is 'null'.
[TOP](#table-of-contents)
___
### Useful Native Methods
In the examples above you saw how objects can have access to properties that aren't their own.  JS has a couple native methods for exploring an object's prototype chain.  They are great tools for studying and learning JS inheritance.

* [.getOwnPropertyNames()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames):
    ```javascript
    var ancestor_obj = {property: 'prop'};
    ancestor_obj.property; // 'prop'
    Object.getOwnPropertyNames(ancestor_obj); // ['property']
    var child_obj = {__proto__: ancestor_obj};
    child_obj.property; // 'prop'
    Object.getOwnPropertyNames(child_obj); // []
    ```
* [.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty):
    ```javascript
    ancestor_obj.hasOwnProperty('property'); // true
    child_obj.hasOwnProperty('property'); // false
    ```
* [.isPrototypeOf()]():
    ```javascript
    ancestor_obj.isPrototypeOf(child_obj); // true
    child_obj.isPrototypeOf(ancestor_obj); // false
    Object.prototype.isPrototypeOf(child_obj); // true
    Object.prototype.isPrototypeOf(ancestor_obj); // true
    Object.isPrototypeOf(ancestor_obj); // false
    // Notice that 'Object.prototype' is the ancestor not 'Object'
    // The 'prtototype' property is an object like any other
    // rather than pointing directly to 'Object', the proto chain points to a property of 'Object'.
    // This is very common in JS.  
    // Later in this lesson we will see why it is a practical design pattern
    ```
    * So far we've used the term 'ancestor' because it is more intuitive for learning how this works.  This method introduces the correct term - 'prototype'.  Moving forward we will be using the word 'prototype'.
    
There are more similar methods, but these three will be the most useful for analyzing code and learning inheritance. While it isn't a method, inspecting 'anything.\_\_proto\_\_' in ChromDev will also be invaluable.

[TOP](#table-of-contents)
___
### Recommended Practices
In the previous examples we have set protoypes by directly manipulating the '.\_\_proto\_\_' property, this is not the best way to do things.  There are three native methods designed to set inheritance chains.  Each one serves a slightly different purpose.  Below is our recommended practices for creating objects in your code:

* Object Literals:
    * If you're making a simple object, don't worry about any of these other methods.  Just use object literals.  They're efficient, easy to read, maintainable, and convention.  Even Object Factories (the next chapter) are just functions that build and return object literals.  Most of the time literals are the right solution.
    * Check out [ES6 enhanced object literals](http://www.benmvp.com/learning-es6-enhanced-object-literals/).
* [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create): <- click for docs
    * Returns a new object with a prototype of your choice:
        ```javascript
        var prototype_obj = {propterty: 'prop'};
        var child_obj = Object.create(prtototype_obj)
        ```
    * Cannot be used to change the prototype of an existing object, only to create new objects.  
    * [Mr Funfunfunctional](https://www.youtube.com/watch?v=CDFN1VatiJA) explains.
* [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign): <- click for docs 
    * Copies the properties from 1 or more objects into a target object.  This is a simple example, read the docs for more details:
        ```javascript
        var first_obj = {first_prop: 1};
        var second_obj = {second_prop: 2};
        Object.assign(second_obj, first_obj);
        econd_obj; // {second_prop: 2, first_prop: 1}
        ```
    * This method doesn't actually modify the prototype chain.  It's sort of the opposite of 'create', it combines two or more objects into one.  When you assign one object to another you are literally copying the methods from one object to another. Use '.hasOwnProperty()' to explore the difference between '.assign()' and '.create()'.
    * Knowing when and how to use this one can be tricky to figure out.  We'll address this in the next chapter by recommending and discussing a few _design patterns_.
* [Object.setPrototypeOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf): <- click for docs
    * The recommended way to change an object's prototype. Better than resetting '.\_\_proto\_\_' directly:
        ```javascript
        var obj = {};
        var prototype_obj = {property: 'prop'};
        var child_obj = Object.setPrototypeOf(obj, prototype_obj);
        child_obj; // {property: 'prop'}
        ```
    * While resetting prototypes is sometimes the right solution, it is better to design your code to work without this. Resetting prototypes makes your app more prone to side-effects and mysterious bugs.  
    * Resetting prototypes is slow, but probably your app is slower so that won't matter.
    


That sums up the basics of Prototypical Inheritance.  You have the lookup chain, and a couple tools for directly investigating or manipulating it.  Knowing when and how to use these tools can be tricky.  Our first recommendation is to design your code so you don't have to deal with the look-up chain.  The next chapter on Factories shows how to incorporate OOP into your app without using inheritance.  If you really just want to use inheritance, skip to [Using Inheritance](#using-inheritance) to learn how.

[TOP](#table-of-contents)
___
### Externals

[cli exercises](https://github.com/sporto/planetproto)    

[a resource](http://js4py.readthedocs.io/en/latest/object-tree.html)  
  
[learn-co](https://github.com/learn-co-curriculum/intro-oo-js)

[MDN explains](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)  

[TOP](#table-of-contents)
___
### NLS Resources
* [Advanced ES6 Literal stuff](http://2ality.com/2015/09/proto-es6.html)
* [Defining and Setting properties](http://2ality.com/2012/08/property-definition-assignment.html)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>


