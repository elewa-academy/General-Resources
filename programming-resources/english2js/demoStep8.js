// 8) refactor!    (addon for this week. makes better sense once you've read and written more code)
/*
	this procedure has left me with some pretty good code,
		variables are well named
		the code is (relatively) logical to read
		the algorithm is not overly convoluted or 'elegant'
		you understand what you wrote

	but there are a few things that can be fixed:
*/

// avoid redefining variables every time you use them
var isItPalindrome = function(stringInput) {
	var palindromeStatus;
	var totalLetters = stringInput.length;
	var lettersChecked = 0;
	var leftmostUnchecked;
	var rightmostUnchecked;
	var lettersLeft;
	var decided = false;
	while (decided == false) {
		leftmostUnchecked = stringInput.charAt(lettersChecked);
		rightmostUnchecked = stringInput.charAt(totalLetters - lettersChecked)
		
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;
			decided = true; 		
		};

		lettersLeft = totalLetters - (lettersChecked*2);
		if (lettersLeft <= 1) {
			decided = true;					
		};

		lettersChecked = lettersChecked + 1;
	};
	return palindromeStatus;
}

// avoid extranious variables and conditional checks
var isItPalindrome = function(stringInput) {
	var palindromeStatus = true; // defaults to true. 0 or 1 letters is a palindrome
	var lettersChecked = 0;
	var leftmostUnchecked;
	var rightmostUnchecked;
	var lettersLeft = stringInput.length - (lettersChecked*2);
	while (lettersLeft <= 1) {
		leftmostUnchecked = stringInput.charAt(lettersChecked);
		rightmostUnchecked = stringInput.charAt(stringInput.length - lettersChecked)
		
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;
			decided = true; 		
		};

		lettersChecked = lettersChecked + 1;
		lettersLeft = stringInput.length - (lettersChecked*2);
	};
	return palindromeStatus;
}

// avoid extranious variables, operations and conditional checks
var isItPalindrome = function(stringInput) {
	var palindromeStatus = true; // defaults to true. 0 or 1 letters is a palindrome
	var lettersChecked = 0;
	var leftmostUnchecked;
	var rightmostUnchecked;
	var lettersLeft = stringInput.length - (lettersChecked*2);
	while (lettersLeft > 1 && palindromeStatus = true) {
		leftmostUnchecked = stringInput.charAt(lettersChecked);
		rightmostUnchecked = stringInput.charAt(stringInput.length - lettersChecked)
		
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;		
		};
		
		lettersChecked = lettersChecked + 1;
		lettersLeft = lettersLeft - 2;
	};
	return palindromeStatus;
}



// maybe add some comments
var isItPalindrome = function(stringInput) {
	var palindromeStatus = true; // defaults to true. 0 or 1 letters is a palindrome
	var lettersChecked = 0;
	var leftmostUnchecked;
	var rightmostUnchecked;
	var lettersLeft = stringInput.length - (lettersChecked*2);
	while (lettersLeft > 1 && palindromeStatus = true) {
		// access next letters to compare
		leftmostUnchecked = stringInput.charAt(lettersChecked);
		rightmostUnchecked = stringInput.charAt(stringInput.length - lettersChecked)
		
		// compare them.  if they don't match, reset palindromeStatus
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;		
		};
		
		// keep track of how many letters are checked
		lettersChecked = lettersChecked + 1;
		lettersLeft = lettersLeft - 2;
	};
	return palindromeStatus;
}

// can anything be replaced by a more eyeball friendly, built-in syntax?
var isItPalindrome = function(stringInput) {
	var palindromeStatus = true; // defaults to true. 0 or 1 letters is a palindrome
	var lettersChecked = 0;
	var leftmostUnchecked;
	var rightmostUnchecked;
	for (var lettersLeft = stringInput.lenght; lettersLeft > 1; lettersLeft - 2) {
		// access next letters to compare
		leftmostUnchecked = stringInput.charAt(lettersChecked);
		rightmostUnchecked = stringInput.charAt(stringInput.length - lettersChecked)
		
		// compare them.  if they don't match, reset palindromeStatus
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;		
		};
		
		// keep track of how many letters are checked
		lettersChecked++;
	};
	return palindromeStatus;
}
// OR 
var isItPalindrome = function(stringInput) {
	var palindromeStatus = true; // defaults to true. 0 or 1 letters is a palindrome
	var lettersChecked = 0;
	var leftmostUnchecked;
	var rightmostUnchecked;
	for (var lettersChecked = 0;  lettersChecked*2 <= stringInput.length; lettersChecked++) {
		// access next letters to compare
		leftmostUnchecked = stringInput.charAt(lettersChecked);
		rightmostUnchecked = stringInput.charAt(stringInput.length - lettersChecked)
		
		// compare them.  if they don't match, reset palindromeStatus
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;		
		};
	};
	return palindromeStatus;
}

// challenge:  do you notice any extra work being done in the for loop refactor?
// challenge:  refactor this to have a while loop in 'isItPalindrome' and a helper function called inside the while loop





