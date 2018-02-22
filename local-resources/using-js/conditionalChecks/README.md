# Conditinal Statements

When setting up a series of conditional checks, it is best to structure them according to the logical relationships between the conditions you are checking for.

Why go through all this extra trouble?
* efficiency:
    - if done correctly, your conditionals should never have to check the same condition twice
* readability:
    - if done correctly, you will arrive at one of the simplest and most readable arrangements of conditional checks
* debugging and maintaining:
    - readable code is fixable code
    - when each condition is only checked in one place, it is easier to make sure you've corrected all bugs

The 3 relationships to consider:
1. Mutually Exclusive
    - the two conditions cannot be true at the same time:
		ie - you are dead. you are alive. you never existed.
2. Logical Dependancy
    - the two conditions are related.  knowledge of one condition provides information about the other condition:
		ie -  The ground is wet. It just rained.
3. Locigally Independant
	- the two conditions are unrelated.  knowledge of one condition provides no information on the other condition:
		ie - you woke up on time for class.  i am dead.

Each classification calls for a differently structured conditional check:
1. Mutally Exclusive  -  'if'/'else'/'else if' information:
    ```javascript
    if (you never existed) {
    	never mind
    } else if (you're dead) {
    	hold funeral
    } else {
    	invite to dinner
    };
    ```
2. Logically Dependant  -  nested if statements:
	```javascript
	if (the ground is wet) {
		if (it's raining) {
			bring umbrella
		} else {
			turn off sprinkler
		};
	} else {
		lay down in grass
	};
	```
3. Logically Independant  -  sequential if statements
	```javascript
    if (you woke up) {
		all good
	} else {
		call your phone
	};
	if (i'm dead) {
		hold funeral
	} else {
		be disappointed
	};
	```  
	  
___  
### Resources  
  
https://revelry.co/coding-without-if-statements/  
