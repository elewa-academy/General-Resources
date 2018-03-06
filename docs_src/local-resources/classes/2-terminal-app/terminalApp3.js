// just like the last file, but with extensions for running in a browser
// this is the app from the sampleApp 


/*
VIEW: displays data in a friendly way, used by a CONTROLLER object
   properties:
     template: a template string for embedding data strings
   methods:
     constructor:
       args: a string template
       returns: a 'view' object
       behavior: sets a new 'view' objects 'template' and returns it
     render: 
       args: a string 
       returns: undefined
       behavior: concatinates arg with the template string, and logs it    
*/
class View {
  constructor(template) {
    this.template = template;
  }

  getTemplate() {
    return this.template;
  }

  render(value) {
    var compiled = this.template + value;
    console.log(compiled);
  }
}

var viewer = new View('sss');

viewer.template = 'kiril';

/*
BROWSERVIEW: extends VIEW to be front-end compatible
  properties:
    template: *super*
  methods:
    constructor:
      *super*
    render:
      args: an array of strings
      returns: html text with arg strings embedded
      behavior: produces a popup
*/
class BrowserView extends View {
  constructor(template) {
    super(template);
  }

  render(name) {
    if (name !== undefined) {
      document.getElementById("display").textContent=this.template + ' ' + name;
      document.getElementById("db").textContent=JSON.stringify(this.db);
    } else {
      document.getElementById("display").textContent="that doesn't exist";
      document.getElementById("db").textContent=JSON.stringify(this.db);
    }  
  }
}

/*   -- add a schema class with built-in validation --
MODEL: manages a simple database. to be used by a CONTROLLER object
  properties:
    db: {key: {value: val, _id: integer}}
    nextId: the unique id for the next db item
  methods:
    addOne: 
      args: new key and new value
      returns: nothing
      behavior: adds the new item, sets its key, advances this.nextId
    getOne:
      args: a key
      returns: the value
      behavior: yes
    getAll:
      args: none
      returns: an array with all db values
      behavior: yes
    update:
      args: key to update, it's desired new value
      returns: nothing
      behavior: sets the key's value to the other argument
    remove:
      args: the key to remove
      returns: nothing
      behavior: yes
*/
class Model {
  constructor() {
    this.db = {};
    this.nextId = 0;
  }

  // pushes something that looks like this: {key: value}
  addOne(key, val) {
  	this.db[key] = {};
  	this.db[key].val = {};
  	this.db[key].val =  val;
  	this.db[key]._id = this.nextId;
  	this.nextId ++;
  }

  getOne(key) {
  	return this.db[key];
  }

  getAll() {
  	var values = [];
  	for (var key in this.db) {
  		values.push(this.db[key].val)
  	}
    return values;
  }

  update(key, newValue) {
  	this.db[key].val = newValue;
  }

  remove(key) {
  	delete this.db[key];
  }
}

/*
CONTROLLER: moderates the view and model classes
  properties:
    model: a model instance
    view: a view instance
  methods:
    getOne: 
      args: key to be retrieved
      returns: nothing
      behavior: accesses the key's value from model and displays it with view
    getAll:
      args: nope
      returns: nope
      behavior: retrieves all values from model and displays them with the view
    update:
      args: key to update and new value
      returns: nope
      behavior: updates the selected item then displays all
    post:
      args: new key, new value
      returns: nope
      behavior: adds the new db element then displays the database
    remove: 
      args: the key to be removed
      returns: nope
      behavior: removes the selected item and displays the new database
    postToServer:
      args: a final cart object
      returns: nothing
      behavior: send a post request to the server
*/
class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	getOne(key) {
		var value = this.model.db[key].val;
		this.view.render(value)
	}

	getAll() {
		this.view.render(this.model.getAll());
	}

	update(key, valueNew) {
		this.model.update(key, valueNew);
		this.view.render(this.model.getAll());
	}

	post(key, value) {
		this.model.addOne(key, value);
		this.getAll();
	}

	remove(key) {
		this.model.remove(key);
		this.getAll();
	}
}

/*
BROWSERCONTROLLER: extends controller so any of its methods can be called by argument
  properties:
    *super*
  methods:
    browse: 
      args: the method name to be used, followed by any arguments that method takes
      returns: nope
      bahavior: calls the method if it can, and errors if not
*/
class BrowserController extends Controller {
  browse(meth, arg1, arg2) {
    if (this[meth] !== undefined) {
      this[meth](arg1, arg2);
    } else {
      this.view.render();
    }  
  }
}

//-----------------------------

// create the instances needed
var mod = new Model();
var brvw = new BrowserView('yo there ');
var brcn = new BrowserController(mod, brvw)

// wrap them in an onclick function
var runnin = function() {
  brcn.browse(document.getElementById("first").value, document.getElementById("second").value, document.getElementById("third").value);
};


// --------- challenge ------------- //
// extend the view and controller so this will run in the browser
