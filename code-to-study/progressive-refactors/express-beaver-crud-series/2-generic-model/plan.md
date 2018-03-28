
this app will have a model like the others we've built.
the handlers will now be like controller methods 
	- a call to model, a call to view
Begin! :
	1 - index and hardcoded entries -
			app.js, 
				index.ejs, 
				get./
				dataModel: object
					properties: 
						db: object
							initialized: {0: {datatype}}  
					methods:
						getAll: function
							args: none
							return: array containing all items in DB
							behavior: translates db into an array

	2 - mod out the model
			1: create a new folder called models
			2: move the model object into it
			3: require it into app.js

	3 - create new entries -
			app.js	
				create.ejs, 
				get./dataType, 
				post./dataType
			dataModel:
				properties:
					nextId: number
						initialized: 1
					schema: object
						initialized: empty object
				methods:
					addObject: function
						args: a new dataType object
						return: boolean
						behavior: checks to make sure if the object is valide.  if so, sets the new object's id and saves it to db.  
					setSchema: function
						args: schema object 
						return: undefined
						behavior: sets object's schema property to whatever you pass in.  call this method in the model file BeforE exporting it.
					validate: function 
						args: dataType object
						return: boolean
						behavior: compares new object to schema.  special note - this method is only called by other methods within the model object, never by any other object.

	4 - read individual entry -
			app.js	
				read.ejs, 
				get./dataType/:id
			dataModel:
				methods:
					getOne: function
						args: an id
						return: a dataType object
						behavior: retrieves and returns the needed object

	5 - update individual entry -
			app.js	
				update.ejs, 
				get./dataType/:id/update, 
				post./dataType/:id/update
			dataModel:
				methods:
					updateOne: function
						args: an id and an object with the keys/value pairs to replace
						return: boolean (or a message)
						behavior: takes an id and a partial or complete object.  the method will replace only the properties that match the schema

	6 - delete individual entry -
			app.js	
				delete.ejs, 
				get./dataType/:id/delete, 
				post./dataType/:id/delete
			dataModel: 
				methods:
					deleteOne: function
						args: id
						return: boolean
						behavior: deletes the indicated object if it exists







