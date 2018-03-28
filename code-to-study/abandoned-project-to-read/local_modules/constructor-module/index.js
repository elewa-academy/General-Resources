function modelConstructor(schema) {
	this.schema = schema;
	this.db = {};
	this.nextId = 0;
};

modelConstructor.prototype.add = function(newObject, cb) {
	var err = null;
	// if(this.schemaCheck(newObject)){
		newObject._id = this.nextId;
		this.db[this.nextId] = newObject;
		this.nextId++;
	// } else {
	//	err = 'object does not match schema';
	// };
	cb(err);
};
modelConstructor.prototype.delete = function(id, cb) {
	var err = null;
	// if(this.db[id] != 'undefined'){
		delete this.db[id];
	// } else {
	//	err = 'id does not exist in db';
	// };
	cb(err);
};
modelConstructor.prototype.update = function(id, key, newValue, cb) {
	var err = null;
	// if(this.db[id] != 'undefined'){
	//	if(this.schema[key] != undefined) {
			this.db[id][key] = newValue;
	//	} else {
	//		err = 'key is not in schema';
	//	};
	// } else {
	//	err = 'id does not exist in db';
	// };
	cb(err);
};
modelConstructor.prototype.get = function(id, cb) {
	var err = null;
	var returner = {};
	if(this.db[id] != 'undefined'){
		returner = this.db[id];
	} else {
		err = 'id does not exist in db';
	};
	cb(err, returner);	
};
modelConstructor.prototype.getAll = function(cb) {
	var returner = [];
	var err = null;
	if(Object.keys(this.db).length != 0) {
		for(var item in this.db) {
			returner.push(this.db[item]);
		};
	} else {
		err = 'db is emtpy';
	};
	cb(err, returner);
};
modelConstructor.prototype.schema = function(checkMe) {
	// return true or false after comparing checkMe to this.schema
};

function modelConstructorWrapper(schema) {
	return new modelConstructor(schema);
}

module.exports = modelConstructorWrapper;
