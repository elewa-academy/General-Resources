# SPECIFICATIONS
Writing and reading specifications is one of the most important skills in software development, it will help with:
* reading and using tests
* reading and writing documentation
* talking about code with others
* reading source code
* planning applications
* thinking in abstractions
* ... and many, many more 


Below is a short example-based guide to reading and writing specs using 3 snippets of code. Each section will contain a code sample, a spec for that sample, and a generalized spec for that type of code snippet. (to you picky programmers, [specs](http://searchsoftwarequality.techtarget.com/definition/functional-specification) are really complicated that what's in this markdown.  this is just an introduction to help you start on your way to learning real functional specifications.)
* [A pure function](#pure-functions)
* [An object literal w/o methods](#object-literals-without-methods)
* [An object literal w/ methods](#object-literals-with-methods)


Exercises:
* [Reading](#practice-reading)
* [Writing](#practice-writing)
___
### PURE FUNCTIONS

```javascript
function exercise(cow, time) {
  while(time > 0) {
      cow.weight = weight - 3;
        time -= 1;
    };
  return cow;
};
```
Specs for this code snippet:
* exercise: function
    * args: 2
       * cow: a cow object
          * purpose: so there's a cow to exercise
       * time: number
         * purpose: to know how long to exercise the cow
    * return: a cow object
    * purpose: so the healthier cow can go home
  * behavior: subtacts 3 from the cow's weight for every unit of time
  * purpose: to make healthier cows
 
General spec for pure functions:
* function_name:  type (function)
  * args:  number of them
    * argA:  type
      * purpose:  what does this arg do in the method
  * return:  type
    * purpose:  what is the returned value used for in the function
  * behavior:  what happend between the function's curly braces
  * purpose:  what does this function do in the applicaiton


[TOP](#specifications)
---
### OBJECT LITERAL without METHODS
```javascript
var dictionary = {
  'cow': 'a ruminant',
  'ruminant': 'an animal with 4 stomach chambers',
  '4': 'the fourth number after 0',
  '0': undefined
};
```
Specs for this object:
* dictionary: object
  * properties: 4
    * cow: string
      * initialized: 'a ruminant'
      * purpose: another entry in the dictionary
    * ruminant: string
      * initialized: 'an animal with 4 stomach chambers'
      * purpose: another entry in the dictionary
    * 4: string
      * initialized: 'the fourth number after 0'
      * purpose: another entry in the dictionary
    * 0: undefined
      * initialized: undefined
      * purpose: another entry in the dictionary
  * purpose: Used to store word/definition pairs
  
General spec for object literal with no methods: 
* object_name: object
  * properties: number of them
    * property_name: type 
      * initialized: what value is here when the application is started. (either hardcoded or dynamically generated at start-up)
      * purpose: why is this property in the object
  * purpose: why does this object exist in the application



[TOP](#specifications)
-----------
### OBJECT LITERAL with METHODS
```javascript
var cow = {
  age: 0,
  weight: 100,
  eat: function(food) {
    var poop = 'used ' + food;
    return poop;
  };
};
```
Specs for this code snippet:
* cow: object
  * properties: 2
    * age: number
      * initialized: 0
      * purpose:  how old is said cow?
    * weight: number
      * initialized: 100
      * purpose: how much food will it produce?
  * methods: 1
    * eat: function
      * args: 1
        * food: string
          * purpose: determines the type of poop
      * return: string
        * purpose: to recycle used food
      * behavior: takes the type of food and contatinates 'used' to the front
      * purpose: so the cow can eat food
  * purpose: our application is a cow simulator, it needs cows

General spec for object literal w/ methods:
* object-name:  object
  * properties:  x of them
    * propertyA:  type
      * initialized:  initial value
      * purpose:  why does this thing exist in the app
  * methods:  y of them
    * methodA:  function
      * args:  z of them
        * argA:  type
          * purpose:  what does this arg do in the method
        * return:  type
          * purpose:  why does the app care that this is returned
      * behavior:  what happend between '{' and '}'
      * purpose:  why does this thing exist in the object
  * purpose:  why does this thing exist in the app
 

[TOP](#specifications)
---
### Practice Reading
* [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
  * On the left hand side of the page are listed the properties and methods.  If you click on a method you will see they describe 'parameters', 'return value', 'description'.  They also list 'usage examples', this is a difference between specs and documentation - specs are for making code, docs are for using code.
* [lodash](https://lodash.com/docs/)  
  * This is a lovely library for functional programming and immutable data-types.  We'll be covering it in week 9.
* [Documenting small JS projects](https://www.quora.com/What-makes-good-documentation-for-a-small-JavaScript-project)
  * A friendly little article

---

### Practice Writing

Move on through the rest of this repo!
 

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>



  
