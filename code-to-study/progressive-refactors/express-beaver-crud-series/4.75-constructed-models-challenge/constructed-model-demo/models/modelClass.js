class modelClass {
	// properties go in the constructor
	constructor(newSchema) {	
		this.schema = newSchema;
		this.db = {};
		this.nextId = 0;
	}
	// methods go down here
	getAll() {
		return Object.values(this.db);
	}
	addObject(newObject) {
		this.db[this.nextId] = newObject;
		this.nextId++;
	}
};


module.exports = modelClass;