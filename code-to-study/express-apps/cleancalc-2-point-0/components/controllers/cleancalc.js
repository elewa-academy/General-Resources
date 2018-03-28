var cleancalc = {
	lastResult: 0,
	add: function(arg1, arg2) {
		return arg1 + arg2;
	},
	subtract: function(arg1, arg2) {
		return arg1 - arg2;
	},
	multiply: function(arg1, arg2) {
		return arg1 * arg2;
	},
	divide: function(arg1, arg2) {
		return arg1 / arg2;
	},
	operate: function(operation, arg1, arg2) {
		if (arg2) {
			lastResult = this[operation](arg1, arg2);
			return lastResult;
		} else {
			lastResult = this[operation](arg1, this.lastResult);
			return lastResult;
		}
	}
};

module.exports = cleancalc;