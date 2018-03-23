module.exports = { // each method has equivalent functionality, different style
    model: {},
    view: {},
    logic: {},
    add: function(a, b) {
    	this.model.getLastResult((err, result) => {
    		if (err) {
    			console.log(err);
    		} else {
    			this.logic.add(a, b, result, (err, result) => {
    				if (err) {
    					console.log(err);
    				} else {
    					this.model.setLastResult(result, (err, result) => {
    						if (err) {
    							console.log(err);
    						} else {
    							this.view.render(result);
    						};
    					});
    				};
    			});
    		};
    	});
    },
    otherAdd: function(a, b) {
        this.model.getLastResult((err, result) => {
            if (!err) {
                this.logic.add(a, b, result, (err, result) => {
                    if (!err) {                        
                        this.model.setLastResult(result, (err, result) => {
                            if (!err) {
                                this.view.render(result);
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
        this.model.getLastResult(cb1);
        var cb1 = (err, result) => {
            if (err) {
                console.log(err);
            } else {
                this.logic.add(a, b, result, cb2);
            };
        };
        var cb2 = (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        this.model.setLastResult(result, cb3);
                    };
                };
        var cb3 = (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                this.view.render(result);
                            };
                        };
    }
};
