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

var controller = {
    add: function(a, b) {
        var lastResult = model.getlastResult();
        var result = logic.add(a, b, lastResult);
        model.setLastResult(result);
        view.render(result);
    }
};

var model = {
    lastResult: 0000,
    setLastResult: function(new_last_result) {
        this.lastResult = new_last_result;
    },
    getLastResult: function() {
        return this.lastResult;
    },
};

var logic = {
    add: function(a, b, lastResult) {
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
        return result;
    }
};

var view = {
    render: function(result) {
        document.getElementById("output").innerHTML = result;
    }
};
