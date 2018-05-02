// we're now pretending this HOF is a module you import into your app

var module12 = {};

module12.higherOrder = function(arg1, arg2, cb) {
	var err = null;
	var result = null;
	if((typeof arg1 == 'number') &&  (typeof arg2 == 'number'))	{
		result = arg1 + arg2;
		cb(err, result);
	} else {
		err = 'result aint no number';
		cb(err, result);
	};
};

module.exports = module12;
