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


let controller = {
    add: function(a, b) {
        let lastResult = model.getLastResult();
        let result = logic.add(a, b, lastResult);
        model.setLastResult(result);
        view.render(result);
    }
};

let model = {
    lastResult: 0000,
    setLastResult: function(new_last_result) {
        this.lastResult = new_last_result;
    },
    getLastResult: function() {
        return this.lastResult;
    },
};

let logic = {
    add: function(a, b, lastResult) {
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
        return result;
    }
};

let view = {
    render: function(result) {
        console.log(result);
    }
};

handler.add();
