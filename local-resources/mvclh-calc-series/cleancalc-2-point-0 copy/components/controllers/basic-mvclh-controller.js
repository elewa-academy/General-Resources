var controller = {
	model: {},
	view: {},
	logic: {},
    add: function(a, b) {
        var lastResult = this.model.getLastResult();
        var result = this.logic.add(a, b, lastResult);
        this.model.setLastResult(result);
        this.view.render_add(result);
    }
};

module.exports = controller;