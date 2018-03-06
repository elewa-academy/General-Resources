// it is necessary to place 'module' after its contents have been defined

module.exports = howdy;

var howdy = {};

howdy.sayIt = function () {
	console.log('howdy');
};
