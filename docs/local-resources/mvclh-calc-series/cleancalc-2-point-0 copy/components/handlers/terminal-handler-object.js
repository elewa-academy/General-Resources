var handler = {
	controller: {},
	handle: function() {
		var args = process.argv.slice(2);
		var n1 = Number(args[0])
		var n2 = Number(args[1])
		return [n1, n2]
	}
};

module.exports = handler;