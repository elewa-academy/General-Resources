// we're now pretending this HOF is a module you import into your app

var module10 = {};

module10.higherOrder = function(arg1, arg2, callBack) {
	var err = null;
	var result = null;
	if((typeof arg1 == 'number') &&  (typeof arg2 == 'number'))	{
		result = arg1 + arg2;
		callBack(err, result);
	} else {
		err = 'result aint no number';
		callBack(err, result);
	};
};

module.exports = module10;