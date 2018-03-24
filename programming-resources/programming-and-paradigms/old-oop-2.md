
# OOP 2 - Prototypical Inheritance and Factories
___
#### Table of Contents
* [Prototypical Inheritance](#welcome-to-inheritance)
    * [Hands-On Exploration](#hands-on-exploration)
    * [proto lookup chain](#proto-lookup-chain)
    * [Useful Native Methods](#useful-native-methods)
    * [Recommended Practices](#recommended-practices)
    * [Prototype Exercises](#prototype-exercises)
* [Factories](#Factories)    
    * [factories](#factories)
    * [recommeded design patterns](#recomended-design-patterns)
    * [Exercises](#factory-exercises)
    * [Factory, Composition Resources](#factory-and-composition-resources)
* [Using Inheritance](#using-inheritance)
    * [Mixins](#mixins) 
    * [Constructor Functions](#constructor-functions)
    * [ES6 classes](#es6-classes)
* [Advanced Design Patterns](#advanced-design-patterns)
* [The Great Debate](#comprehensive-resources)

intro
protoypes
factories
ways of inheriting
advanced design patterns
op-eds
___
___
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
    6. Enter 'arr.\_\_proto\_\_.\_\_proto\_\_.\_\_proto\_\_' in the console.
    
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
        var second_obj = Object.assign(second_obj, first_obj);
        var second_obj; // {second_prop: 2, first_prop: 1}
        ```
    * This method doesn't actually modify the prototype chain.  It's sort of the oposite of 'create', it combines two or more objects into one.  When you assign one object to another you are literally copying the methods from one object to another. Use '.hasOwnProperty()' to explore the difference between '.assign()' and '.create()'.
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
### Prototype Exercises
http://js4py.readthedocs.io/en/latest/object-tree.html
some simplish challenges
[TOP](#table-of-contents)
___
___
## Factories

[tl;dr](https://blog.gisspan.com/2016/07/Constructor-Vs-Factory.html)

In the modern world of JS development objects are the players, not the game.  The game is FP.  Inheritance is the OOP approach to creating and extending objects, factories are FP's answer to inheritance. 


[TOP](#table-of-contents)
___
### Recommended Design Patterns
These simple patterns are more than enough to get you started. One day you know why you need something facnier, at that point you can make it up yourself.

Some benefits to using these patterns:
* Simple to understand.  They're pretty much what-you-see-is-what-you-get, object literals being created inside of functions.
* 'This' behaves very nicely.  Unless you bind or use arrow functions, you'll never need to think about 'this' again.
* As they sit at the intersection of OOP and FP in JS, these patterns are a great way to study execution context.

#### The Patterns
* [Simple factory](#simple-factory)
* [extending with composition](#extending-with-composition) 
* [get creative with 'assign' and 'create'](#getting-creative)
    
    

#### Simple Factory
* A function that builds and returns an object literal.  Does not touch the inheritance chain:
    ```js
    function cow_factory_1(name, breed) {
        return {
                    name: name,
                    breed: breed,
                    moo: function() { console.log('moo') },
                        // what do these do when you change the cow's name?
                    closure_es6: () => { console.log('hi, im ' + name) };
                    closure_es5: function() { console.log('hi, im ' + name) };
                    context_es6: () => { console.log('hi, im ' + this.name) };
                    introduce: function() { console.log('hi, im ' + this.name) };
                };
    };
    
    function cow_factory_2(name, breed) {
        function moo() { console.log('moo') };
        function introduce() { console.log('hi, im ' + this.name) };
        return {
                    name,
                    breed,
                    moo,
                    introduce
                };
    };
    
    function cow_factory_3(name, breed) {
        var new_cow = {};
        new_cow.name = name;
        new_cow.breed = breed;
        new_cow.moo = function() { console.log('moo') };
        new_cow.introduce = function() { console.log('hi im ' + this.name) };
        return new_cow;
    };
    
    ```
    * Use this pattern whenever you need objects that start out with the same methods and same properties but different values.  This pattern should be your fallback, it'll do almost everything you need in this class.
    * These three ways are all interchangable, use whatever works for you but be consistent.
    * [ES6 enhanced literals makes this pattern suprisingly powerful](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1).
    * '.map' and '...' are very useful for creating more general-purpose factories.
    * [Short, sweet article about this pattern ](https://blog.gisspan.com/2016/07/Constructor-Vs-Factory.html)
    
    
[The Patterns](#the-patterns)

#### Extending with Composition
* _Composition_ is a technique for creating new objects by combining two or more objects inside of a pure function.  In go two or more objects, out comes a new object with all the old objects' properties copied into it. The new object is in no way connected to the factory, it's '\_\_proto\_\_' points to the default 'Object.prototype'.  
* This design pattern combines incoming objects with a predetermined set of properties, 'extending' the original object to include a new set of superpowers:
    ```js
    function spiderify_1(arg_obj) {
        var spider = {
            spider: true
        };
        return Object.assign(arg_obj, spider);
    };
    
    function spiderify_2(arg_obj) {
        return Object.assign(arg_obj, { spider: true });
    };
    
    function spiderify_3(arg_obj) {  // I think this one is the most readable
        var new_obj = Object.assign(arg_obj, {
                    spider: true
                });
        return new_obj;
    };
    
    var pig = {
        pig: true
    };
    var spiderpig = spiderify_3(pig);
    // to compose two random objects just use Object.assign
    ```
    * Composed objects are more appropriate for functional programming than inheriting objects.  A composed object will always behave the same no matter what happens in the app (unless you change it directly). They are not susceptible to _side effects_ if their prototype object is modified or they are moved to a different context.  
    * [mini-tutorial on composition](http://blog.ricardofilipe.com/post/javascript-composition-for-dummies)
    * Beware of property enumerability: [Nice article + examples](https://hashnode.com/post/what-are-enumerable-properties-in-javascript-ciljnbtqa000exx53n5nbkykx), [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)


    

[The Patterns](#the-patterns)
    
#### Getting Creative    
* don't underestimate 'assign' and 'create' alone!
* but beware:  Object.assign(a, b) != Object.assign(b, a)
* For composing or inheriting from any two objects, go with these bare methods. 
* [neat dictionary](http://adripofjavascript.com/blog/drips/creating-objects-without-prototypes.html), creating with 'null' proto
```js
    
    // takes any number of objects and composes them
    function n_adic_composer() {
        var new_obj = {};
        for (var object of arguments) {
            new_obj = Object.assign(new_obj, arguments[object]);
        };
        return new_obj;
    };
```

    
[The Patterns](#the-patterns)    
[TOP](#table-of-contents)
___
### Factory Exercises
simple factory with different closure/context conditions
closures in inherited methods
context mirroring prototype chain
[TOP](#table-of-contents)
___
###  Factory and Composition Resources
* [A few ways to compose](https://medium.com/javascript-scene/the-open-minded-explorer-s-guide-to-object-composition-88fe68961bed)
* [Trait.js, alternative to '.assign'](https://www.barbarianmeetscoding.com/blog/2016/01/04/safer-javascript-object-composition-with-traits-and-traits-dot-js/)
* [advanced composition article](https://rjzaworski.com/2013/03/composition-in-javascript)
* [another way of composing](https://gist.github.com/Jiert/efa5a30200d1ebb62122)
* [configurable facotry](http://dealwithjs.io/design-patterns-the-factory-pattern-in-javascript/)
* [Mr. Funfunfunction on factories](https://www.youtube.com/watch?v=ImwrezYhw4w)

[TOP](#table-of-contents)
___
___
## Using Inheritance
You'll rarely use free-standing inheritance manipulation.  What's more common is to wrap prototype manipulations in a function for re-use - to dynamically create similar objects, to manage inheritance chains in real-time, for extended functionality.  There are many ways to do this, but all(most) of them boil down to functions that return an object, or functions that return functions that return objects.  

[all of it](http://www.datchley.name/understanding-prototypes-delegation-composition/)

[TOP](#table-of-contents)
___
### Mixins
* add to an object's inheritance chain.  sometimes right, but not usually
* a good idea when you want to have the ability to modify the functionality of a whole lot of objects from one place.  try to avoid needing to do this
* arrow functions don't work well with inheritance, stick to es5.  This has to do with closures, figure out what that is.  
* common vs individual props
* [Mr. Funfunfunction on Inheritance vs Composition](https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205)
* http://raganwald.com/2015/06/17/functional-mixins.html
* https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c

[TOP](#table-of-contents)
___
### Constructor Functions
important for reading mozilla documentation, but not the best practice for your own apps
why avoid them?  because it uses 'this' in confusing ways and needing 'new' makes your code more futurproof. 

constructing constructors
    factory that sets prototype to outside object
    facotry that attaches that object to the function
    constructor - note the subtle differences
    ```js
    outerproto
    function
    addtoouterproto
    
    function.outerproto
    function
    addtoouterproto
    
    constructor
    addtoprototype
    ```

ahttps://sangupta007.wordpress.com/2017/02/12/inheritance-tree-in-javascript/
the diagram, explain it
[TOP](#table-of-contents)
[strange pseud-factory using constructors](https://carldanley.com/js-factory-pattern/)
http://2ality.com/2013/07/defending-constructors.html

[TOP](#table-of-contents)
___
### ES6 Classes 

ES6 introduced a lovely thing called 'classes'.  
If you've never programmed before, they will make your life easy as you begin to learn interitance and OOP modeling in JS. (Easy, not better.) 
If you've already learned how prototypes work in JS you may or may not want to use them, but you'll appreciate the abstraction they provide.  
If you come from a language with true classical inheritance, don't start here.  First learn pure prototypical inheritance then learn how classes work in JS. The name is very misleading, they work nothing like true classes.

 Because this syntax hides what is truely happening, we recommend only using classes once you understand what they do behind the scenes when you can say why they're the best solution.

RESOURCES:
* [Our progressive examples](https://github.com/jankeLearning/content-code/tree/master/Week%2003/classes)
* [How to use them well](https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4) (skip the react bit at the end of the article.)
* Two from Mozilla herself: [1](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) [2](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
* [very good examples from google](https://github.com/googlechrome/samples/tree/gh-pages/classes-es6)
* [advanced introduction](https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes)
* [friendly introduction](https://ilikekillnerds.com/2015/02/a-guide-to-es6-classes/)
* [fancy things to do with classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
* [Building factories with classes](https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9)
* [outstanding video](https://www.youtube.com/watch?v=SS-9y0H3Si8)


[TOP](#table-of-contents)
___
___
## Advanced Design Patterns
organize by paradigm (?)

Just a list, check it out on your own later.
Static methods: yay express!  methods connected directly to the factory
[private methods](https://atendesigngroup.com/blog/factory-functions-javascript)
- https://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/
- https://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/ - and [PrivateParts](https://github.com/philipwalton/private-parts)
- closing for privacy
    - http://javascript.crockford.com/private.html
    - https://atendesigngroup.com/blog/factory-functions-javascript
        ```javascript
        function privator(propVal) {
            var privateContext = {propVal: propVal};
            function getter() {
                return this.propVal;
            };
            function setter(newVal) {
                this.propVal = newVal;
            };
            return {
                getter: getter.bind(privateContext),
                setter: setter.bind(privateContext)
            };
        };
        ```
data and method objects
reassign '\_\_proto\_\_' without setprotoof, 
    * create a function that uses assign and cleverness
    * or that copies enumerable properties to new object with correct prototype
[configurable factory](http://dealwithjs.io/design-patterns-the-factory-pattern-in-javascript/).    
[Module Pattern](https://toddmotto.com/mastering-the-module-pattern/)
[Stamps](https://github.com/stampit-org/stampit) 
- https://www.reddit.com/r/javascript/comments/4jqxst/stamp_pattern/
- [introducing stamps](https://medium.com/javascript-scene/introducing-the-stamp-specification-77f8911c2fee)
[Deep Merge](https://davidwalsh.name/javascript-deep-merge)
[Abstract Factory](http://robdodson.me/javascript-design-patterns-factory/)
http://raganwald.com/2016/07/20/prefer-composition-to-inheritance.html
factory factories
and beyond

[TOP](#table-of-contents)
___
___
# Op Eds
Inheritance, compositions, design patterns.  These are all topics of heated debate in the JS community. 


organize by opinion

* great but more advanced series of articles:
    * [1](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a)
    * [2](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3)
    * [3](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4)
* https://www.quora.com/Are-ES6-classes-bad-for-JavaScript
* https://github.com/joshburgess/not-awesome-es6-classes
* https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
* https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e
* https://medium.com/@rauschma/i-would-never-argue-that-es6-classes-are-clearly-a-better-choice-than-composition-modules-or-891e462da85b
* https://medium.com/javascript-scene/inside-the-dev-team-death-spiral-6a7ea255467b
* [proclass](https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/)
* https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e
* https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
* https://8thlight.com/blog/eric-meyer/2012/11/16/composition-over-mixins.html
* [composition vs. inheritance gist](https://gist.github.com/branneman/ff9b7f0d16621cbb93ad)
* http://2ality.com/2013/07/defending-constructors.html
* 

_________

to filter


* [almost this whole md, plus some](https://developers.caffeina.com/object-composition-patterns-in-javascript-4853898bb9d0)
* [Long talk, recommended if you love this stuff](https://vimeo.com/69255635)
* [Assign to Merge](http://2ality.com/2014/01/object-assign.html)
* [stamps?](https://medium.com/@_ericelliott/we-don-t-need-a-standard-for-single-inheritance-single-inheritance-taxonomies-are-an-anti-pattern-5d58ad7107d0)
* [A stackoverflow duck](https://stackoverflow.com/questions/33692912/using-object-assign-and-object-create-for-inheritance).
* http://wiki.c2.com/?CategoryCreationalPatterns
* [a bit advanced](http://dealwithjs.io/design-patterns-the-factory-pattern-in-javascript/)
* https://stackoverflow.com/questions/39571915/factory-functions-vs-object-create-javascript-when-to-use-which
* [indepth discussion](https://nemisj.com/js-without-new-and-this/)
* patterns
    http://radar.oreilly.com/2014/03/javascript-without-the-this.html
    http://davidshariff.com/blog/javascript-inheritance-patterns/ 
        - function from crockford (each no centralized methods)
        - prototypal - best to teach?
* https://www.barkweb.co.uk/blog/object-composition-and-prototypical-inheritance-in-javascript
http://www.datchley.name/understanding-prototypes-delegation-composition/

relegate?
* [OBP in ES6](https://maximilianhoffmann.com/posts/object-based-javascript-in-es6) - fluffy
* * [completish article series, assumes some knowledge in programming](https://davidwalsh.name/javascript-objects) - off-focus, quality?, unecessary
- https://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/ - and [PrivateParts](https://github.com/philipwalton/private-parts)
- http://javascript.crockford.com/private.html

design pattern resources, but pretty big : 
* https://carldanley.com/javascript-design-patterns/
* https://github.com/FelipeBB/Design-Patterns-JS
* http://loredanacirstea.github.io/es6-design-patterns/
* http://tcorral.github.io/Design-Patterns-in-Javascript/
* http://shichuan.github.io/javascript-patterns/#design-patterns


[TOP](#table-of-contents)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>