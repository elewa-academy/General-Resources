// 	a factory function for true OOP accounts
// 	'this' causes the object's method to refer to it's own value of 'cash'
// 		it 'sets the context' of cash

var accountGenerator = function(money) {
	// identical to the object in 8.js
	var newAccount = {
		cash: money,
		changeCash: function(deltaCash) {
			this.cash = this.cash + deltaCash;
		},
		displayCash: function(){
			console.log('i has this many monies: ' + this.cash);
		}
	};
	return newAccount;
}

var accObj = accountGenerator(6)
console.log(accObj)


// ----------------------------- //
// var bank = [];
// console.log('\nno accounts in the bank: ' + bank);

// for (var i = 0; i < 5; i++) {
// 	bank.push(accountGenerator(i+1));
// };

// console.log('\naccounts now in the bank: ' + bank);

// console.log('\nor ask them directly:');
// for (var i = 0; i < 5; i++) {
// 	bank[i].displayCash();
// };

// console.log('\ncompound interesting!');
// for (var i = 0; i < 5; i++) {
// 	for (var j = 0; j < 10; j++) {
// 		bank[i].changeCash(bank[i].cash * 1.5)
// 	};	
// };
// console.log('\nor ask them again:');
// for (var i = 0; i < 5; i++) {
// 	bank[i].displayCash();
// };


