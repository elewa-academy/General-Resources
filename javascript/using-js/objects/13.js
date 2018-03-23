//  								everything
// 
//	lettuce make an accounting system that adds all employees' 
// 	salaries to their bank account at the end of every month
//  
//	it's not a simple example. spend some time with it then we can build it up together

// unchanged from before
var OGaccount = function(money) {
	this.cash = money;
	this.changeCash = function(deltaCash) {
			this.cash = this.cash + deltaCash;
		};
	this.displayCash = function(){
			console.log('i has this many monies: ' + this.cash);
		};
};


// employeeGenerator - creates employee objects
//					   takes a bank account as an argument	
// employee objects -
//		bankAccount: the employees bank account
// 		payMe: adds an employees salary to it's account
//	this function is used only inside the accounting system
var employeeGenerator = function(account, salary) {
	this.bankAccount = account;
	// ******************************** //	
	// this method is a closure - 
	// 'salary' is defined everywhere inside the constructor because it is an argument.
	// an object created in the constructor will continue to have behave as though it 
	// 	were in the 'context' of the constructor even once it is free-roaming.
	// it has 'remembered it's roots'
	this.payMe = function() {
		console.log("paying me");
		this.bankAccount.changeCash(salary);
	};
};

// accountingSystem -
//		employeeDB: an array containing employee objects
//		addEmployee: adds an employee to DB
//					 takes a bank account and a salary as arguments
//		payDay: a method that pays each employee in its DB
//				takes no arguments
//		displayEmployees: displays employees
//				takes no arguments
var accountingSystem = {
	employeeDB: [],
	addEmployee: function(empAccount, empSalary) {
		// ***************************************** //
		// the closure on line 28 is given it's value here 
		var newEmployee = new employeeGenerator(empAccount, empSalary);
		this.employeeDB.push(newEmployee);
	},
	payDay: function() {
		for (var i = 0; i < this.employeeDB.length; i++) {
			this.employeeDB[i].payMe();
		};
	},	
	displayEmployees: function() {
		for (var i = 0; i < this.employeeDB.length; i++) {
			// because all that matters about a person is how much money they've got
			// this is also an example of 'chaining' 
			this.employeeDB[i].bankAccount.displayCash();
		};
	}
};

// ------------------------------------ //

//have 10 employees
for (var i = 0; i < 10; i++) {
	accountingSystem.addEmployee(new OGaccount(0), i*10);
};
// cycle through one year
for (var i = 0; i < 12; i++) {
	console.log("\nmonth " + i + " -----------------------");
	accountingSystem.displayEmployees();
	accountingSystem.payDay();
	accountingSystem.displayEmployees();
};














