window.onload = init;   

function init() {
    var addButton = document.getElementById("addButton");
    addButton.onclick = function() {
        handler.add();
    };
}

var handler = {
    add: function() {
        var a; // to tell the difference between no number and 0
        var pre_a = document.getElementById("number1").value;
        if (pre_a == '') {
            a = undefined; // try Number('') to see why I do this
        } else {
            a = Number(pre_a);
        };

        var b;
        var pre_b = document.getElementById("number2").value;
        if (pre_b == '') {
            b = undefined;
        } else {
            b = Number(pre_b);
        }

        controller.add(a, b);

        document.getElementById("number1").innerHTML = null;
        document.getElementById("number2").innerHTML = null;
    },
};

var controller = { // each method has equivalent functionality, different style
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
                    } else {}
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
        var cb1 = (err, result) => {
            if (err) {
                console.log(err);
            } else {
                logic.add(a, b, result, cb2);
            };
        };
        var cb2 = (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        model.setLastResult(result, cb3);
                    };
                };
        var cb3 = (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                view.render(result);
                            };
                        };
    }
};

var model = {
    lastResult: 0000,
    getLastResult: function(cb) {
    	cb(null, this.lastResult);
    },
    setLastResult: function(newLastResult, cb) {
    	this.lastResult = newLastResult;
    	cb(null, newLastResult);
    }
};

var logic = {
    add: function(a, b, lastResult, cb) {
        var result = 0000;
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

var view = {
    render: function(result) {
        document.getElementById("output").innerHTML = result;
    }
};
