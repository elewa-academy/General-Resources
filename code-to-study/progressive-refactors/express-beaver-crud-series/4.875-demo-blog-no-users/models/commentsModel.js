var commentsModel = {
	// schema: {},
	DB: {},
	nextID: 0000,
	addObject: function(newObject) {
		// var checked = this.validate(newObject)
		// if(checked)	 {
			newObject.id = nextID;
			this.DB[nextID] = newObject;
			this.nextID++;
		// } else {
			// return false;
		// };
	},
	getObject: function(id) {
		return this.DB[id];
	},
	updateObject: function(id, newObject){
		newObject.id = id;
		this.DB[id] = newObject;
		return this.getObject(id);
	},
	deleteObject: function(id) {
		delete this.DB[id];
	},
	getAll: function() {
		var allObjects = [];	
		allObjects = Object.values(this.DB);
		return allObjects;
	}
	// validate: function(obj) {
	// 	// code
	// },
	// setSchema: function(newSchema) {
	// 	this.schema = newSchema;
	// }
};

// var commentSchema = {
		// 	id: 0000,
		// 	author: '',
		// 	text: '',
		// 	datePublished: '',
		// 	postId: 0000
		// };
// model.setSchema(commentSchema);

module.exports = commentsModel;
