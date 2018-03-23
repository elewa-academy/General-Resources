module.exports = {
	model: {},
	view: {},
	logic: {},
    operate: function(operation, arg1, arg2) {
		if (!operation) {
			this.view.render("invalid operation");
		} else {
        	let lastResult = this.model.getLastResult();
        	let result = this.logic[operation](arg1, arg2, lastResult);
        	this.model.setLastResult(result);
        	this.view.render(result);
        };
    }
};
