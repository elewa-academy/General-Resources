Mongoose
===
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

In simple words, Mongoose acts as an intermediate between mongodb and server side language(like NodeJs). 

### Installing Mongoose

Mongoose is a NPM-package, so you just need to npm install it in your project and require it.

`npm install --save mongoose`

```javascript
var mongoose = require(mongoose);
```

### Connecting to MongDB

```javascript
mongoose.connect('mongodb://localhost/db_name', {
  useMongoClient: true
})
```

Mongoose has a "connect" method that takes the path to the mongoDb instance as the first argument. Here you link to an existing database. If the database doesn't exist yet, if will be dynamically created by mongoose.

> The second parameter gets rid of an annoying warning message everything you start your application.

When using mLab you'll also have to enter a username and password. You should find the link in your database profile in your account.

```javascript
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds119533.mlab.com:19533/db_name', {
    useMongoClient: true
})
```

Simple Crud
---

### Creating a Schema

The database schema of a database system is its structure described in a formal language supported by the database management system (DBMS). The term "schema" refers to the organization of data as a blueprint of how the database is constructed (divided into database tables in the case of relational databases). The formal definition of a database schema is a set of formulas (sentences) called integrity constraints imposed on a database. These integrity constraints ensure compatibility between parts of the schema.

A simple schema example:

```javascript
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  age: {type: Number}
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

var User = mongoose.model("User", UserSchema);
```
Above we've created a schema for storing user objects. We define 4 properties (first\_name, last\_name, username and password ) and add some integrity constraints (datatype, required, unique).

We then create a **model** based on the created schema.

> It's important to note that it's not necessary to define an ID property. Mongoose/MongoDb automatically creates an unique ID.

### Storing a document

The model can then be used to store **documents** based on the defined schema. Let's say we retrieve a user object through a form input:

```javascript
var userObj = {
  first_name: "Rien",
  last_name: "Cosyns",
  age: 29,
  username: "riebow",
  password: "G##@83r4r4f5!@$T^" 
}

User.save(userObj, (err, record) => {
  if (err){
    console.log(err);
  } else {
    console.log(record);
  }
})
``` 

We can use the .save method to store the user object in the database.

### Finding a document

```javascript
var username = {username: "riebow"};
User.findOne(username, (error, existingUser) => {
  if (error){
    console.log(error);
  } else if (!existingUser){
    console.log("No such user");
  } else {
    console.log("User found: " + existingUser);
  } 
})
```

You can find exactly one document with .findOne method. If you want to retrieve multiple documents, you can use the .find method. Probably the best way to find a specific entry is to use the .findById method. which retrieves the document based on the ID.

### Updating a document

```javascript
var username = {username: "riebow"};
var query = {age: 30};

User.findOneAndUpdate(username, query, (error, updatedUser) => {
  if (error) return false;
  return updatedUser
})
```

### Deleting a document

```javascript
var username = {username: "riebow"}
User.findOneAndDelete(username, (err) => {
  if (err) return false;
  console.log("User deleted"); 
})
```

[Super basic Mongoose app](https://github.com/jankeLearning/content-code/tree/master/Week%2006/super-basic-mongoose-app)
  
External resources
----

Mongoose 2: many-to-many relationships
===
### Types of relationships

A type of relationship where two entities are solely linked to each other, e.g a country has only one capital city, and a capital city is the capital of only one country, is called a **one-to-one relationship**. An element of A may only be linked to one element of B, and vice versa.

If an element of A can only be linked to one element of B, but B can be linked to many elements of A, this is called **one-to-many relationships**. For example, a child has only one biological mother, but the mother can have multiple children.

Finally, when elements of both A and B can be linked to multiple elements of each other, we call this a **many-to-many relationship**. For example, an author can write many books, and a book can have multiple authors.

.populate method
----

Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples.

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);
```

So far we've created two **Models**. Our _Person_ model has its stories field set to an array of ObjectIds. The ref option is what tells Mongoose which model to use during population, in our case the _Story_ model. All \_ids we store here must be document \_ids from the _Story_ model.

### Saving refs

Saving refs to other documents works the same way you normally save properties, just assign the _id value:

```javascript
var author = new Person({
  _id: new mongoose.Types.ObjectId(),
  name: 'Ian Fleming',
  age: 50
});

author.save(function (err) {
  if (err) return handleError(err);
  
  var story1 = new Story({
    title: 'Casino Royale',
    author: author._id    // assign the _id from the person
  });
  
  story1.save(function (err) {
    if (err) return handleError(err);
    // thats it!
  });
});
```

### Population

So far we haven't done anything much different. We've merely created a Person and a Story. Now let's take a look at populating our story's author using the query builder:

```javascript
Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.creator.name);
    // prints "The author is Ian Fleming"
  });
```

Populated paths are no longer set to their original _id , their value is replaced with the mongoose document returned from the database by performing a separate query before returning the results.

Project
---

[Link](https://github.com/jankeLearning/projects/tree/master/06-RESTFUL-app) to project.
+ Mongoose playlist: https://www.youtube.com/playlist?list=PLGquJ_T_JBMQ1C0Pp41sykceli8G1UGtg


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>