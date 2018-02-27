// 
// 6 continued) replace your pseudocode line-by-line


/* while decided == false				*/
/* 		do the outer two letters match? */
/* 		   if they don't, set to false 	*/
/*				and set decided to true */
/* 		how many letters are left?     	*/
/* 		   if its 1, 0: decided = true	*/

// declare new variables, replace 'structural' syntax
var decided = false;
while (decided == false) {
/* 		find the outer two letters */
	if (/* outer letters don't match */) {
/* 		set palindrome to false 
		set decided to true 			*/
	};
/* 		how many letters are left?     	*/
	if (/* its 1 or 0 */) {
/*		decided = true				*/
	};
};

// replace what is a simple translation
var decided = false;
while (decided == false) {
/* 		find the outer two letters */
	if (/* outer letters don't match */) {
 		palindromeStatus = false;
		decided = true; 		
	};
/* 		how many letters are left?     	*/
	if (/* its 1 or 0 */) {
		decided = true;					
	};
};

// you are now faced with 3 much simpler problems:
//		determining if two 'mirror' letters are equl
//		determining how many letters you haven't compared
var decided = false;
while (decided == false) {
/* 		find the outer two letters */
	if (/* outer letters don't match */) {
 		palindromeStatus = false;
		decided = true; 		
	};
/* 		how many letters are left?     	*/
	if (/* its 1 or 0 */) {
		decided = true;					
	};
};

// both are easily fixed by knowing how many letters you started with
// by now everything is either in code, or is a google search away from being replaced by it
var totalLetters = /* length of stringInput */
var lettersChecked = 0;
var decided = false;
while (decided == false) {
	var leftmostUnchecked = /* letter at location 'lettersChecked' */
	var rightmostUnchecked = /* letter at location 'totalLetter'-'lettersChecked'   */
	
	if (leftmostUnchecked != rightmostUnchecked) {
 		palindromeStatus = false;
		decided = true; 		
	};

	var lettersLeft = (totalLetters-(lettersChecked*2));
	if (lettersLeft <= 1) {
		decided = true;					
	};

	lettersChecked++;
};

// paste your solution into the template funciton you created earlier
// look it over, is there anything left as pseudocode?
//		if yes, does it matter?
var isItPalindrome = function(stringInput) {
	if (/* stringInput is only letters */) {
		var palindromeStatus;
		// paste final solution here
		return palindromeStatus;
	};
	else {
		return "leave me alone";
	};
}

// i'd say it doesn't.  let's check if anything is a palindrome and be done!
var isItPalindrome = function(stringInput) {
	var palindromeStatus;
	var totalLetters = stringInput.length;
	var lettersChecked = 0;
	var decided = false;
	while (decided == false) {
		var leftmostUnchecked = stringInput.charAt(lettersChecked);
		var rightmostUnchecked = stringInput.charAt(totalLetters - lettersChecked)
		
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;
			decided = true; 		
		};

		var lettersLeft = (totalLetters-(lettersChecked*2));
		if (lettersLeft <= 1) {
			decided = true;					
		};

		lettersChecked++;
	};
	return palindromeStatus;
}