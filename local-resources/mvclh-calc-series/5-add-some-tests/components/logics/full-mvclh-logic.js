module.exports = {
    add: function(a, b, lastResult) {
        let result = 0;
        if (a && b) {
            result = a + b;
        } else if (a) {
            result = lastResult + a;
        } else if (b){
            result = lastResult + b;
        } else {
            result = lastResult;
        }
        return result;
    },
    subtract: function(a, b, lastResult) {
        let result = 0;
        if (a && b) {
            result = a - b;
        } else if (a) {
            result = lastResult - a;
        } else if (b){
            result = lastResult - b;
        } else {
            result = lastResult;
        }
        return result;
    },
    multiply: function(a, b, lastResult) {
        let result = 1;
        if (a && b) {
            result = a * b;
        } else if (a) {
            result = lastResult * a;
        } else if (b){
            result = lastResult * b;
        } else {
            result = lastResult;
        }
        return result;
    },
    divide: function(a, b, lastResult) {
        let result = 1;
        if (a && b) {
            result = a / b;
        } else if (a) {
            result = lastResult / a;
        } else if (b){
            result = lastResult / b;
        } else {
            result = lastResult;
        }
        return result;
    }
};
