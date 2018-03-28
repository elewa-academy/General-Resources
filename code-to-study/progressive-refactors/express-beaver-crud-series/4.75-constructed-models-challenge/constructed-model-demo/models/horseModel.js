var modelClass = require('./modelClass');

var horseSchema = {
	name: {
			type: 'string',
			fallback: 'randolph'
		},
	horsiness: {
			type: 'number',
			fallback: 8
		}
};
var horseModel = new modelClass(horseSchema);

module.exports = horseModel;
