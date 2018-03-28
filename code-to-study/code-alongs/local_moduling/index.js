var rudolph = require('rudolph');
var constructorModule = require('model-constructor');

var chairSchema = {
	legs: {
		type: 'number',
		fallback: 2
	}
};

var chairModel = constructorModule(chairSchema);

var allChairs = [];

console.log('----------- access empty db');
chairModel.getAll((err, allOfem) => {
	if(err) {
		console.log(err);
	} else {	
		for(var chair in allOfem) {
			console.log(allOfem[chair]);
		};
	};
});

console.log('---------- add first chair');
var newChair = {legs: 3};
chairModel.add(newChair, (err) => {
	if (err) {
		console.log(err);
	} else {	
		chairModel.getAll((err, allOfem) => {
			if(err) {
				console.log(err);
			} else {	
				for(var chair in allOfem) {
					console.log(allOfem[chair]);
				};
			};
		});
	};
});

console.log('---------- add second chair');
var newerChair = {legs: 5};
chairModel.add(newerChair, (err) => {
	if (err) {
		console.log(err);
	} else {	
		chairModel.getAll((err, allOfem) => {
			if(err) {
				console.log(err);
			} else {	
				for(var chair in allOfem) {
					console.log(allOfem[chair]);
				};
			};
		});
	};
});

console.log('--------- delete first chair');
chairModel.delete(0, (err) => {
	if (err) {
		console.log(err);
	} else {	
		chairModel.getAll((err, allOfem) => {
			if(err) {
				console.log(err);
			} else {	
				for(var chair in allOfem) {
					console.log(allOfem[chair]);
				};
			};
		});
	};
});

console.log('\n', rudolph);
