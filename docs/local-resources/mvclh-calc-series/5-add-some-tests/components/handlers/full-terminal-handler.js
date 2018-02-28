module.exports = {
    controller: {},
    handle: function() {
    	let args = process.argv.slice(2);

    	let operation = "";
    	if (args[0] == "add") {
    		operation = args[0];
    	} else if (args[0] == "subtract") {
    		operation = args[0];
    	} else if (args[0] == "multiply") {
    		operation = args[0];
    	} else if (args[0] == "divide") {
    		operation = args[0];
    	} else { // send error if operation is invalid
    		operation = false;
    	};

        let a; // to tell the difference between no number and 0
        let pre_a = Number(args[1]);
        if (pre_a == '') {
            a = undefined; // try Number('') to see why I do this
        } else {
            a = Number(pre_a);
        };

        let b;
        let pre_b = Number(args[2]);
        if (pre_b == '') {
            b = undefined;
        } else {
            b = Number(pre_b);
        }

        this.controller.operate(operation, a, b);
    }
};