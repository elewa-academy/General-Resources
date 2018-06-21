# TESTING 101

* [Intro](#intro)
* [Specifications](#specs)
* [Test Cases](#test-cases)
* [Unit Tests](#unit-tests)
* [Minimal Passing Functions](#minimal-passing-functions)
* [Gradual Refactoring](#gradual-refactoring)
* [BDD, TDD](#bdd-and-tdd)  
* [Testing Frameworks](#testing-frameworks)
* [Exercises](#exercises)
___
## Intro

Testing is an empassioned topic.  If you search online you'll find great debates over which frameworks to use and how to fit tests into your development cycle.  Underlying all sides of the arguments are a few universal concepts.  This lesson will attempt to teach the universal fundamentals then set you off on the right track to learn the rest.

The first part of this lesson will cover testing fundamentals culminating in the backbone of (almost) all testing paradigms and frameworks - the test suite: 
1. [Pure Functions](#pure-functions)
2. [Specifications](#specs)
3. [Unit Tests](#unit-tests)
4. [Test Suites](#all-together-now)
  
The second part of this lesson will give some ideas for incorporating testing into your dev process, and introduce our favorite testing framework:  

5. [BDD, TDD](#bdd-and-tdd)  
6. [Minimal Passing Functions](#minimal-passing-functions)  
7. [Gradual Refactoring](#gradual-refactoring)  
8. [Jasmine, testing framework](#jasmine)  

[TOP](#testing-101)
___
## Specs
Specs are a crucial part of planning code before writing code.  If you are going to follow the TDD or BDD testing paradigms, it's best you get a hang of these now.

A specification is plain text that describes everything needed for someone to build code with a given functionality.  If specs are well written (and well followed) all implementations will be interchangeable.   My code may be faster than yours, and hers may be easier to read, and his uses less memory, but we could close our eyes to pick one and the application will still work the same.  
  
If you are careful to build pure functions you only need to specify 3 things to fully describe your code: 
1. ARGUMENTS:  The number of arguments your function needs and the type of each one. 
2. RETURN TYPE: The type of whatever is to the right of your return statement.  If there is no return statement, Javascript defaults to returning 'undefined'.   
3. BEHAVIOR:  A high level description of what happens between the curly braces. If this gets longer than 2 lines you should think about breaking your function into littler functions.

Specs for the division function above.  It's import that everything is spelt the same in your specs and your function:
* division: function  
  * ARGS: 2  
    * a: number  
    * b: number
  * RETURN: number  
  * BEHAVIOR: Divides a by b, if b is not 0.  Returns the result or 'undefined', depending on the inputs.
  
[TOP](#testing-101)
___
## Test Cases

Test Cases are the simplest possible example of something called a __higher order function__.  Higher order functions are functions that take other functions as arguments.  Let's take a look at some specs for a test case to see how they work: 
* test_case: function
  * ARGS: 1
    * testee: function
  * RETURN: boolean
  * BEHAVIOR: Executes testee with a hard-coded set of arguments and compares the returned value against an expected result.  Returns true or fals according to the comparison.

These are the atoms of all testing.  You build test cases for each function (or method) based on it's specs.
  
Below is a series of _Test Cases_ for the division function.  Coming up with a good collection of test cases means determining what are the important classifications of input/output pairs and testing each one.  The principle is very simple. Coming up with them is easy but time consuming.  Coming up with good ones is challenging and worth the effort.  There is no better way to understand a function than coming up with a good set of test cases.  

```javascript
function test_1_division(testee) {  // positive, positive
	var a = 3;
	var b = 3;
	var expected = 1;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_2_division(testee) { // negative, negative
	var a = -3;
	var b = -3;
	var expected = 1;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_3_division(testee) { // positive, negative
	var a = 3;
	var b = -3;
	var expected = -1;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_4_division(testee) { // negative, positive
	var a = -3;
	var b = 3;
	var expected = -1;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_5_division(testee) { // non-0, 0
	var a = 3;
	var b = 0;
	var expected = undefined;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
function test_6_division(testee) { // 0, non-0
	var a = 0;
	var b = 3;
	var expected = 0;
	var result = testee(a, b);
	if(result == expected) {
		return true;
	} else {
		return false;
	};
};
```
(Take a moment to notice how much more difficult this would be if testee weren't a pure function.)  

[TOP](#testing-101)
___
## Unit Tests
The __Unit Test__ is what ties all these cases together, each unit test tests one unit of code. In this case we're testing the division function.   It's no huge conceptual leap forward, but it makes life a lot easier.  
This one isn't a pure function, what would you have to change to make it one?
```javascript
function division_unit_test(testee) {
	var result = [];
	if(test_1_division(testee)) {  // +/+
		result.push('PASS +/+');
	} else {
		result.push('fail +/+');
	};
	if(test_2_division(testee)) {  // -/-
		result.push('PASS -/-');
	} else {
		result.push('fail -/-');
	};
	if(test_3_division(testee)) {  // +/-
		result.push('PASS +/-');
	} else {
		result.push('fail +/-');
	};
	if(test_4_division(testee)) {  // -/+
		result.push('PASS -/+');
	} else {
		result.push('fail -/+');
	};
	if(test_5_division(testee)) {  // +/0
		result.push('PASS +/0');
	} else {
		result.push('fail +/0');
	};
	if(test_6_division(testee)) {  // 0/+
		result.push('PASS 0/+');
	} else {
		result.push('fail 0/+');
	};
	return result;
};
```

[FunFun Unit Testing](https://www.youtube.com/watch?v=Eu35xM76kKY&list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr)

[TOP](#testing-101)
___
## Next Level Unit Test

If you're a real programmer you'll be annoyed by all the repetition in the unit test above. 

figure out how all this world:

```javascript
function unit_test(testee, args, expected) {
    var result = testee(...args);
    return result == expected;
};

function division(a, b) {
	var result = 0000;
	// logic
	return result;
};

var division_test_cases = [
    { args: [3, 3], expected: 1, name: '+/+' },
    { args: [-3, -3], expected: 1, name: '-/-' },
    { args: [3, -3], expected: -1, name: '+/-' },
    { args: [-3, 3], expected: -1, name: '-/+' },
    { args: [3, 0], expected: undefined, name: 'non-0/0' },
    { args: [0, 3], expected: 0, name: '0/non-0' }
];

function test_suite(test, testee, cases) {
    var results = [];
    for(var test_case in cases) {
        result.push(test(testee, test_case.args, test_case.expected)); 
    };
    return results;
};

function result_interpreter(test_results, test_cases) {
    var interpretation = [];
    for(var i = 0; i < test_results.length; i++) {
        if(test_results[i]) {
            interpretation.push('PASS: ' + test_cases[i].name);
        } else {
            interpretation.push('fail: ' + test_cases[i].name);
        };
    };
    return interpretation;
};
```

[TOP](#testing-101)
___
## Minimal Passing Functions
You've just seen unit tests and have probably heard of B/TDD, but how does it all happen?

Unit tests in conjuntion with _minimal passing functions_ can be used to organize your development process helping you to catch bugs, keep your code simple and on task, and to make sure you aren't overcomplicating your life.  

This is the heart of the B/TDD development philosophies. 

A minimal passing function is just the simplest possible function that will pass it's unit test.  To the point of uselessness.  The example below contains a unit test and a simplest passing function for addition:
 
```javascript
function additionTester(testee) {
	var tested = testee(4, 5);
	var message = '';
	if (tested == 9) {
		message = 'success';
	} else {
		message = 'failure';
	};
	return message;
};

function addition(a, b) {
	return 9;
};
```
This minimal function seems useless, it just returns the right answer!  A simplest passing function will do nothing but pass the test.   That's the goal in B/TDD. If the test asks for an array, the function returns an array.  If the test asks for 'Chlotilde', the function returns 'Chlotilde'.  If the test asks to salt and hash a user's password, that's what it does.

Once a function passes one test, you refactor it a bit to pass more tests and to be better code.  Test it again.  Refactor. Repeat, and you're on your way to B/TDD.

[TOP](#index)
___
## Gradual Refactoring

Using unit tests and minimal functions probably won't come naturally.  Here are a few steps you can practice to begin incorporating them into your development process:
1. Write your _empty code_ (all necessary functions/objects/variables with nothing between the curly braces) according to your specs:     
    ```javascript
    function addition(a, b) {
    }; // (this would be more intersting in a larger program)
    ```
2. Fill it in with dummy return values of the right type so it 'works' (you can call everything without it breaking, but nothing happens):
    ```javascript
    function addition(a, b) {
        var sum = 0000;
        // logic
        return sum
    };
    ```
3. While project isn't finished:
    1. make a separate branch for the feature/module/function you are working on.
    2. gradually test->pass->refactor that bit of code gradually upping your test-passing expectations with each iteration. Shoot for new fringe cases, trickier inputs, it's almost a game between you and the test writer:
        ```javascript
        // Can you guess what test conditions were passed with each new step?
        function addition(a, b) {    // first iteration
            var sum = 0000;
            // logic
            return sum;
        };
        function addition(a, b) {    // second iteration
            var sum = 0000;
            sum = a + b;
            return sum;
        };
        function addition(a, b) {    // third iteration
            var sum = 0000;
            if ((typeof(a)=='number') && (typeof(b)=='number')) {
                sum = a + b;
            };
            return sum;
        };
        function addition(a, b) {    // final iteration
            var result;
            if ((typeof(a)=='number') && (typeof(b)=='number')) {
                result = a + b;
            } else {
                result = undefined;
            };
            return sum;
        };
        ```
        (It's important that you only modify the single piece of code while on it's branch. If you planned well from the beginning it shouldn't depend on anything else to pass it's tests)
    3. After the branch is finished, merge it back into master.
4. Launch first version and continue on to the next, repeating this process.

[TOP](#testing-101)
___
## BDD and TDD

The 'DD methods of development require you to plan before and while you write code - always a good thing. There are many flavors of 'DD, here are two of the most popular:

### Test Driven Development
TDD is the practice of writing tests for your code at the same time as your write your code.  [Here's Uncle Bob to explain it better.](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)

TDD Resources:
* [JrSinclaire Introduction](https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/)
* [Beginner's Walkthrough](https://github.com/dwyl/learn-tdd)
* [Exercism Bowling](http://exercism.io/exercises/javascript/bowling/readme)
* [Hontas Bowling](https://github.com/hontas/bowling-game-kata)

### Behavior Driven Development
BDD and TDD work very well together.  BDD says that before you start writing your tests, you should plan appliation behaviors with users, marketers, and managment.  Then you move on to writing code, maybe with TDD.
* [Toptal on BDD](https://www.toptal.com/freelance/your-boss-won-t-appreciate-tdd-try-bdd)
* [Wikipedia on BDD](https://en.wikipedia.org/wiki/Behavior-driven_development#Principles_of_BDD)

[TOP](#testing-101)
___
## Testing Frameworks

Hopefully you noticed how tedious it would be to write tests and testing suites by hand.  Developers aren't into that so they've written libraries to do it for you. 
* [An overview](https://medium.com/powtoon-engineering/a-complete-guide-to-testing-javascript-in-2017-a217b4cd5a2a)
* [State of testing](https://stateofjs.com/2016/testing/)


[TOP](#testing-101)
___

## Exercises 
  
* [Simplest Passing Functions](https://github.com/jankeLearning/content-code/tree/master/Week%2001/simplestPassingFuncs)  
* [RMurphey's JS-Assessment](https://github.com/rmurphey/js-assessment)
  
___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
