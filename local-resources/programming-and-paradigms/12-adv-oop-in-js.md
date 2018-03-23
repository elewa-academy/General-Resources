### Advanced OOP in JS

Venture here are your own risk

http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
http://www.zipcon.net/~swhite/docs/computers/languages/object_oriented_JS/index.html
https://medium.com/@leocavalcante/es6-multiple-inheritance-73a3c66d2b6b
http://www.adobe.com/devnet/actionscript/learning/oop-concepts/encapsulation.html
Abstraction - Abstraction vs encapsulation
https://stackoverflow.com/questions/742341/difference-between-abstraction-and-encapsulation
Polymorphism
http://www.adobe.com/devnet/actionscript/learning/oop-concepts/polymorphism-and-interfaces.html
https://www.npmjs.com/package/mixin
https://github.com/rse/aggregation


stampit

crockford: stateless and methodless objects

object pools, proxies


a function that has all the properties to act as the general-case app.  when it is called directly with parameters it copies it's methods/props to a new object (configuring it along the way) and returns it.

The copy mechanism is another form of prototypal inheritance. Sources of clone properties are a specific kind of prototype called exemplar prototypes, and cloning an exemplar prototype is known as concatenative inheritance.

build everything for a functional program (purefunctions, immutable datatypes, ...)
    then build disposable objects from those - binding functions to fresh object literals
    oop when necessary