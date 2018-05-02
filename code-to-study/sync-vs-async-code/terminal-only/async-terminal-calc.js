let handler = {
    add: function() {
        let a; // to tell the difference between no number and 0
        let args = process.argv.slice(2);
        let pre_a = Number(args[0]);
        if (pre_a == '') {
            a = undefined; // try Number('') to see why I do this
        } else {
            a = Number(pre_a);
        };

        let b;
        let pre_b = Number(args[1]);
        if (pre_b == '') {
            b = undefined;
        } else {
            b = Number(pre_b);
        }

        controller.add(a, b);
    }
};

let controller = { // each method has equivalent functionality, different style
    add: function(a, b) {
    	model.getLastResult((err, result) => {
    		if (err) {
    			console.log(err);
    		} else {
    			logic.add(a, b, result, (err, result) => {
    				if (err) {
    					console.log(err);
    				} else {
    					model.setLastResult(result, (err, result) => {
    						if (err) {
    							console.log(err);
    						} else {
    							view.render(result);
    						};
    					});
    				};
    			});
    		};
    	});
    },
    otherAdd: function(a, b) {
        model.getLastResult((err, result) => {
            if (!err) {
                logic.add(a, b, result, (err, result) => {
                    if (!err) {                        
                        model.setLastResult(result, (err, result) => {
                            if (!err) {
                                view.render(result);
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
    otherOtherAdd: function(a, b) {
        model.getLastResult(cb1);
        let cb1 = (err, result) => {
            if (err) {
                console.log(err);
            } else {
                logic.add(a, b, result, cb2);
            };
        };
        let cb2 = (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        model.setLastResult(result, cb3);
                    };
                };
        let cb3 = (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                view.render(result);
                            };
                        };
    }
};

let model = {
    lastResult: 0000,
    getLastResult: function(cb) {
    	cb(null, this.lastResult);
    },
    setLastResult: function(newLastResult, cb) {
    	this.lastResult = newLastResult;
    	cb(null, newLastResult);
    }
};

let logic = {
    add: function(a, b, lastResult, cb) {
        let result = 0000;
        if (a && b) {
            result = a + b;
        } else if (a) {
            result = a + lastResult;
        } else if (b){
            result = b + lastResult;
        } else {
            result = lastResult;
        }
        cb(null, result);
    }
};

let view = {
    render: function(result) {
        console.log(result)
    }
};

handler.add();