module.exports = {
    add: function(a, b, lastResult, cb) {
        var result = 0;
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
