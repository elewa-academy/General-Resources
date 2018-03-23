var logic = {
    add: function(a, b, lastResult, cb) {
        var result = 0000;
        if (a && b) {
            result = a + b;
        } else if (a) {
            result = lastResult + a;
        } else if (b){
            result = lastResult + b;
        } else {
            result = lastResult;
        }
        cb(null, result);
    },
    subtract: function(a, b, lastResult, cb) {
        var result = 0000;
        if (a && b) {
            result = a - b;
        } else if (a) {
            result = lastResult - a;
        } else if (b){
            result = lastResult - b;
        } else {
            result = lastResult;
        }
        cb(null, result);
    },
    multiply: function(a, b, lastResult, cb) {
        var result = 0000;
        if (a && b) {
            result = a * b;
        } else if (a) {
            result = lastResult * a;
        } else if (b){
            result = lastResult * b;
        } else {
            result = lastResult;
        }
        cb(null, result);
    },
    divide: function(a, b, lastResult, cb) {
        var result = 0000;
        if (a && b) {
            result = a / b;
        } else if (a) {
            result = lastResult / a;
        } else if (b){
            result = lastResult / b;
        } else {
            result = lastResult;
        }
        cb(null, result);
    }
};

module.exports = logic;