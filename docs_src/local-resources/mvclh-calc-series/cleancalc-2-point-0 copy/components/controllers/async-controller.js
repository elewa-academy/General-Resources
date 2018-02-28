var controller = {
    title: '',
    model: {},
    logic: {},
    view: {},
    set: function(key, value) {
        this[key] = value;
    },
    operate: function(operation, num1, num2) {
        this[operation](num1, num2);
    },
    home: function() {
        this.view.render_home(this.title);
    },
    add: function(a, b) {
        this.model.getLastResult((err, result) => {
            if (!err) {
                this.logic.add(a, b, result, (err, result) => {
                    if (!err) {                        
                        this.model.setLastResult(result, (err, result) => {
                            if (!err) {
                                this.view.render_add(result);
                            } else {
                                console.log(err);
                            };
                        });
                    } else {
                        console.log(err);
                    };
                });
            } else {
                console.log(err);
            };
        });
    },
    subtract: function(a, b) {
        this.model.getLastResult((err, result) => {
            if (!err) {
                this.logic.subtract(a, b, result, (err, result) => {
                    if (!err) {                        
                        this.model.setLastResult(result, (err, result) => {
                            if (!err) {
                                this.view.render_subtract(result);
                            } else {
                                console.log(err);
                            };
                        });
                    } else {
                        console.log(err);
                    };
                });
            } else {
                console.log(err);
            };
        });
    },
    multiply: function(a, b) {
        this.model.getLastResult((err, result) => {
            if (!err) {
                this.logic.multiply(a, b, result, (err, result) => {
                    if (!err) {                        
                        this.model.setLastResult(result, (err, result) => {
                            if (!err) {
                                this.view.render_multiply(result);
                            } else {
                                console.log(err);
                            };
                        });
                    } else {
                        console.log(err);
                    };
                });
            } else {
                console.log(err);
            };
        });
    },
    divide: function(a, b) {
        this.model.getLastResult((err, result) => {
            if (!err) {
                this.logic.divide(a, b, result, (err, result) => {
                    if (!err) {                        
                        this.model.setLastResult(result, (err, result) => {
                            if (!err) {
                                this.view.render_divide(result);
                            } else {
                                console.log(err);
                            };
                        });
                    } else {
                        console.log(err);
                    };
                });
            } else {
                console.log(err);
            };
        });
    }
};

module.exports = controller;