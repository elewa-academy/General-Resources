var modelClass = require('./modelClass');

var spiderSchema = {
	name: {
			type: 'string',
			fallback: 'rudy'
		},
	spideriness: {
			type: 'number',
			fallback: 8
		}
};
var spiderModel = new modelClass(spiderSchema);

module.exports = spiderModel;
