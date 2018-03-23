// Run it!


var isItPalindrome = function(stringInput) {
	var palindromeStatus = true;
	var totalLetters = stringInput.length-1;
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

// console logging is helpful in debugging 
// off by one errors are the worst
var isItPalindromeRefactoredBroken = function(stringInput) {
	var palindromeStatus = true; // defaults to true. 0 or 1 letters is a palindrome
	var lettersChecked = 0;
	var leftmostUnchecked;
	var rightmostUnchecked;
	for (var lettersChecked = 0;  lettersChecked*2 <= stringInput.length; lettersChecked++) {
		// access next letters to compare
		leftmostUnchecked = stringInput.charAt(lettersChecked);
		rightmostUnchecked = stringInput.charAt(stringInput.length - lettersChecked)
		
		// debugging
		console.log(leftmostUnchecked, rightmostUnchecked);
		console.log(lettersChecked, stringInput.length - lettersChecked);
		console.log('---');

		// compare them.  if they don't match, reset palindromeStatus
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;		
		};
	};
	return palindromeStatus;
}

var isItPalindromeRefactored = function(stringInput) {
	var palindromeStatus = true; // defaults to true. 0 or 1 letters is a palindrome
	var lettersChecked = 0;
	var leftmostUnchecked;
	var rightmostUnchecked;
	var lettersInString = stringInput.length-1;
	for (var lettersChecked = 0;  lettersChecked*2 < lettersInString; lettersChecked++) {
		// access next letters to compare
		leftmostUnchecked = stringInput.charAt(lettersChecked);
		rightmostUnchecked = stringInput.charAt(lettersInString - lettersChecked)

		// debugging
		console.log(leftmostUnchecked, rightmostUnchecked);
		console.log(lettersChecked, lettersInString);
		console.log('---');

		// compare them.  if they don't match, reset palindromeStatus
		if (leftmostUnchecked != rightmostUnchecked) {
	 		palindromeStatus = false;		
		};
	};
	return palindromeStatus;
};


var racecar = 'racecar';
var goose = 'goose';

console.log('------------- naive --------------------');
console.log('racecar: ', isItPalindrome(racecar));
console.log('goose: ', isItPalindrome(goose));

console.log('------------- refactored broken --------');
console.log('racecar: ', isItPalindromeRefactoredBroken(racecar));
console.log('goose: ', isItPalindromeRefactoredBroken(goose));

console.log('-------------- refactored fixed --------');
console.log('racecar: ', isItPalindromeRefactored(racecar));
console.log('goose: ', isItPalindromeRefactored(goose));