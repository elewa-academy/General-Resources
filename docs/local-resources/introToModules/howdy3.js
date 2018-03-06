var howdy = {};

// see what happens if you try running 'sayingIt()' in your server
var sayingIt = function () {
	console.log('howdy');
};

howdy.sayIt = function () {
	sayingIt();
};

module.exports = howdy;