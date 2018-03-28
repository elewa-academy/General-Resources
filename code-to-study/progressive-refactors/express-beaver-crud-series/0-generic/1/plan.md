0 - 
	plan your views and a build schedule
	schedule:
		1 - index and hardcoded entries -
			app.js, index.ejs, get./
		2 - create new entries -
			create.ejs, get./dataType, post./dataType
		3 - read individual entry
			read.ejs, get./dataType/:id
		4 - update individual entry
			update.ejs, get./dataType/:id/update, post./dataType/:id/update
		5 - delete individual entry
			delete.ejs, get./dataType/:id/delete, post./dataType/:id/delete

	OR, Laurens' way
		1 - index and hardcoded entries -
			app.js, index.ejs, get./
		2 - create new entries -
			create.ejs, get./dataType, post./dataType
		3 - read individual entry
			read.ejs, get./dataType/:id
		4/5 - update individual entry
			update.ejs, get./dataType/:id/update, put./dataType/:id/
		5/4 - delete individual entry
			delete.ejs, get./dataType/:id/delete, delete./dataType/:id/
