function terminal_handler() {
	return process.argv.slice(2);
};

module.exports = terminal_handler;