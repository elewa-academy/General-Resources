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

module.exports = model;