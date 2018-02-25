# SPECIFICATIONS
Writing and reading specifications (also called documentation, or API's) is one of the most important skills in software development.  Below is a short example-based guide to reading and writing specs using 3 snippets of code: 
* A pure function
* An object literal w/o methods
* An object literal w/ methods

Each section will contain a code sample, a spec for that sampel, and a generalized spec for that type of code snippet.

The bonus section will contain links to some beginner-friendly documentation for you to practice reading.
___
### PURE FUNCTIONS

```javascript
function butcher(cow, cash) {
	var food = cow.weight * .43; // *
	var message = 'deceased at ' + cow.age + ' years of age';
	return [food, message];
};
// * https://www.oda.state.ok.us/food/fs-cowweight.pdf
```
Specs for this code snippet:
* butcher: function
    * args: 2
       * cow: a cow object
          * purpose: to make meat out of
       * cash: number
         * purpose: the butcher's payment 
    * return: array containing two values
 		* food: the amount of food yeilded from this cow
 		  * purpose: the finished product for his customer
 		* message: a polite message commemorating the cow's life
 		  * purpose: to commemorate the cow
 	* behavior: calculates the amount of yield from the given cow and constructs a polite message
 	* purpose: To model a butcher for our SmallTown application.
 
General spec for pure functions:
* function_name:  type (function)
  * args:  number of them
    * argA:  type
      * purpose:  what does this arg do in the method
  * return:  type
    * purpose:  what is the returned value used for in the function
  * behavior:  what happend between the function's curly braces
  * purpose:  what does this function do in the applicaiton
---
### OBJECT LITERAL w/o METHODS
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

-----------
### OBJECT LITERAL w/ METHODS
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
 
    
---
### BONUS SECTION  
* [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
  * On the left hand side of the page are listed the properties and methods.  If you click on a method you will see they describe 'parameters', 'return value', 'description'.  They also list 'usage examples', this is a difference between specs and documentation - specs are for making code, docs are for using code.
* [lodash](https://lodash.com/docs/)  
  * This is a lovely library for functional programming and immutable data-types.  We'll be covering it in week 9.
* [Documenting small JS projects](https://www.quora.com/What-makes-good-documentation-for-a-small-JavaScript-project)
  * A friendly little article





  