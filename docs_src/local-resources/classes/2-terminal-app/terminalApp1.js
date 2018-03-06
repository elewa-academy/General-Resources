// separating now a model and a view

class View {
  constructor(model, template) {
    this.model = model;
    this.template = template;
  }

  render(name) {
    var name;
    if (this.model[name] == undefined) {
      name = this.model.getAll();
      return this.template + name; 
    } else {
      name = this.model.getOne(name);
      return this.template + name;
    }
  }
}

class Model {
  constructor() {
    this.db = {};
  }

  push(key, value) {
    this.db[key] = value;
  }

  getOne(key) {
    return this.db[key]
  }

  getAll() {
    return this.db;
  }
}


//------------------
var modpod = new Model();
modpod.push('ryan', 'kent');
modpod.push('kate', 'anderson');

var vew = new View(modpod, 'yo there ');

vew.render();
vew.render('ryan');

// figure out what's going on here, it's the key to fixing this
console.log(vew.render('push'));


//-------------------
class LogView extends View {
  render() {
    var compiled = super.render();
    console.log(compiled);
  }
}

var logview = new LogView(modpod, 'hey there friend!  ');

logview.render();
 