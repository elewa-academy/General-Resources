module.exports = {
    lastResult: 0,
    getLastResult: function(cb) {
    	cb(null, this.lastResult);
    },
    setLastResult: function(newLastResult, cb) {
    	this.lastResult = newLastResult;
    	cb(null, newLastResult);
    }
};
