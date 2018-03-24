
# OOP 2 - Factories and Composition

[tl;dr](https://blog.gisspan.com/2016/07/Constructor-Vs-Factory.html)
[What are they?](#what-the-factory)
[Recommended design patterns](#recommended-design-patterns)
[Factory Exercises](#factory-exercises)
[Factory Resrouces](#factory-resources)


___
## What the Factory

Factories are functions that construct new objects according to a template and some parameters you pass in.  They are pure functions, new objects made in a factory retain no connection the the factory that made them. Composition is combining all of the methods from two or more objects to create and return a new hybrid object, this is also done using a factory.  In comes some arguments, out comes a new hybrid function.  In the modern world of JS development objects are the players, not the game.  The game is FP.  _Factories_ are FP's answer to creating and augmenting objects.    

You just went through all that trouble learning prototypes, put that aside for now.  They play no direct role in using Factories.

#### Extra paragraph.  Only read this if you're already familiar with constructors or es6 classes:
Factories are fundamentally different from ES6 classes and constructor functions.  Classes and constructor functions are also a way to create and augment objects, but they do so by modifying an object's inheritance chain.  Objects created by either of these techniques are forever bound to the class or constructor that created them. Whenever you call a method on an object created in a class or a constructor that method isn't attached to the object, it's attached to the constructor or class that create the object.  
Inheritance is effective for creating more efficient applications, but odds are your app isn't fast enough to know the difference.  Even if you are a genius coder, network connections are orders of orders of magnitude slower than the difference between a class and a factory. 
Inheritance is also powerful because you can modify the behavior of all _instances_ of a class or constructor at the same time by modifying their shared prototype.  This is great, but it's also the definition of a side effect. The FP based coding style common in the Node world doesn't like side effects. 

[TOP](#factories-and-composition)
___
### Recommended Design Patterns
These simple patterns are more than enough to get you started. One day you know why you need something fancier, at that point you can make it up yourself.

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
    // are these pure functions?
    
    function butterify_1(arg_obj) {
        var butter = {
            butter: true
        };
        return Object.assign(arg_obj, butter);
    };
    
    function butterify_2(arg_obj) {
        return Object.assign(arg_obj, { butter: true });
    };
    
    function butterify_3(arg_obj) {  
        var new_obj = Object.assign(arg_obj, {
                    butter: true
                });
        return new_obj;
    };
    
    var fly = {
        fly: true
    };
    var butterfly = butterify_3(fly);
    
    ```
    * Composed objects are more appropriate for functional programming than inheriting objects.  A composed object will always behave the same no matter what happens in the app (unless you change it directly). They are not susceptible to _side effects_ if their prototype object is modified or they are moved to a different context.  
    * [mini-tutorial on composition](http://blog.ricardofilipe.com/post/javascript-composition-for-dummies)
    * Beware of property enumerability: [Nice article + examples](https://hashnode.com/post/what-are-enumerable-properties-in-javascript-ciljnbtqa000exx53n5nbkykx), [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties), [or this article](http://2ality.com/2011/07/js-properties.html)


    

[The Patterns](#the-patterns)
    
#### Getting Creative    
* Don't underestimate 'assign' and 'create' alone!  
* To compose two random objects just use 'Object.assign'.  The composition design pattern is just '.assign' packaged with a pre-selected object.  
    * Beware:   Object.assign(a, b) != Object.assign(b, a)
* [A neat dictionary object](http://adripofjavascript.com/blog/drips/creating-objects-without-prototypes.html), creating with 'null' proto.
* A function for composing any number of objects at once:    
    ```js
        function n_adic_composer() {
            var new_obj = {};
            for (var object in arguments) {
                new_obj = Object.assign(new_obj, arguments[object]);
            };
            return new_obj;
        };
    ```
* Static methods: methods connected directly to the factory. Express is a factory and uses many static methods.
* Private properties - properties in an ojbect that can't be modified by users:
    ```javascript
    function person_factory(name) {
        var private_properties = {
            name: name
        };
        return {
            get_name_closure: function() { return private_properties.name },
            get_name_context: function() { return this.name }.bind(private_properties)
        };
    };  // figure out how person objects can modify their own names
    ```

[The Patterns](#the-patterns)   
        


[TOP](#factories-and-composition)
___
### Factory Exercises
simple factory with different closure/context conditions
closures in inherited methods
context mirroring prototype chain
[TOP](#factories-and-composition)
___
###  Factory Resources
* [A few ways to compose](https://medium.com/javascript-scene/the-open-minded-explorer-s-guide-to-object-composition-88fe68961bed)
* [Trait.js, alternative to '.assign'](https://www.barbarianmeetscoding.com/blog/2016/01/04/safer-javascript-object-composition-with-traits-and-traits-dot-js/)
* [advanced composition article](https://rjzaworski.com/2013/03/composition-in-javascript)
* [another way of composing](https://gist.github.com/Jiert/efa5a30200d1ebb62122)
* [configurable facotry](http://dealwithjs.io/design-patterns-the-factory-pattern-in-javascript/)
* [Mr. Funfunfunction on factories](https://www.youtube.com/watch?v=ImwrezYhw4w)
* [A nice article](https://atendesigngroup.com/blog/factory-functions-javascript)  
* [js.info](https://javascript.info/object#copying-by-reference)

[TOP](#factories-and-composition)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
