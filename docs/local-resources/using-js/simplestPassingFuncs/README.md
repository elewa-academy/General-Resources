# Minimal Passing Functions
You've just seen unit tests, but what to do with them?  

Unit tests in conjuntion with _minimal passing functions_ can be used to organize your development process, helping you to make sure you aren't overcomplicating your work or taking any unnecessary detours.  

This is the heart of the TDD and BDD development philosophies.  We'll take a look at these testing strategies later in the course when we cover group development practices.  For now incorporate these tricks however you can without confusing yourself.
___
### What are these things?

A minimal passing function is just the simplest possible function that will pass it's unit test.  To the point of uselessness.  The examples below contain a unit test and a simplest passing function for addition:
 
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
It seems useless, it just returns the right answer!  That's the point.  A simplest passing function will do nothing but pass the test.  If the test asks for an array, the function returns an array.  If the test asks for 'Chlotilde', the function returns 'Chlotilde'.

This method of development requires you to plan before you write code. It also keeps you from spending hours writing the logic for your functions just to find out they don't 'fit together'.  

Once a function passes, you refactor it a bit to add funcitonality.  Test it again.  Refactor. And you've begun to understand TDD.

___
### A procedure you can follow

Using unit tests and minimal functions probably won't come naturally.  Here are a few steps you can practice to begin incorporating them into your development process:
1. Write your _empty code_ (all necessary functions/objects/variables with nothing between the curly braces) according to some requirements, specs, or user stories.
2. Fill it in with dummy return values so it 'works' (you can call everything without it breaking, but nothing happens
3. make a separate branch for each tricky bit, (addTo, operate, changeSchema in the examples.  The examples also use files instead of branches).  You will use these files to independantly develop each tricky bit, allowing you to focus on just one piece of the process at a time.  this is where you will apply what was covered in 'enlish2js'
4. After each bit is finished, reconsolidate into a single finished project.

___
### Resources

We will cover these examples and more in code review.  Resources online that cover these same prinicpals dive immediately into TDD, a topic that requires more coding fluency to understand and incorporate.



