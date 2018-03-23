JavaScript Objects
====
In JavaScript, most things are objects, from core JavaScript features like strings and arrays to the browser APIs built on top of JavaScript. You can even create your own objects to encapsulate related functions and variables into efficient packages, and act as handy data containers. The object-oriented nature of JavaScript is important to understand if you want to go further with your knowledge of the language.

An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.) Let's work through an example to show us what they look like.

As with many things in JavaScript, creating an object often begins with defining and initializing a variable. Try entering the following below in the console:

```javascript
var person = {}
```

Congratulations, you've just created your first object. Job done! But this is an empty object, so we can't really do much with it. Let's update our object to look like this:

```javascript
var person = {
    name: ["Rien", "Cosyns"],
    age: 29,
    gender: "male",
    interests: ['NFL', "coding"],
    bio: function(){
        console.log(this.name[0] + " " + this.name[1] + " is " + this.age + " years old and likes " + this.interests[0] + " and " this.interests[1] )
    },
    greeting: function(){
        console.log("Hi there, my name is " + this.name[0])
    }
}
```
(Don't worry about _this_ for now).

Now try entering some of the following in the console: 

```javascript
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()
``` 

You have now got some data and functionality inside your object, and are now able to access them with some nice simple syntax!

Properties and methods
----
Objects have several _members_, each consisting of a name or _key_ (like name and age) and a value (like ["Rien", "Cosyns"] and 29). We call these **key/value pairs**. Key/value pairs are separated by a comma and the key and the value are separated by a colon. When the value is a data type (string, number, array or another object), we call this a **property**. When the value is a function, this is called a **method**.

An object like this is referred to as an **object literal** — we've literally written out the object contents as we've come to create it. This is in contrast to objects instantiated from classes, which we'll look at later on.

### Dot Notation
To react the value of an object we can use the name of the object and its key, separated by a dot (as seen above in the example).

For example: person.age will return 29.

You can also _chain_ dot notations to reach deeper nested values.

Let's say we had written our object like this:

```javascript
var person = {
    name: {
        first: "Rien",
        last: "Cosyns"
    }
}
```

To find the first name of the person object you'll do like this: `person.name.first // Rien`

### Bracket notation
There is another way to access object properties — using bracket notation. Instead of using these:

```
person.age
person.name
```

You'll use brackets:

```javascript
person['age']
person['name']
```

> Chaining bracket notations is similar to dot notations: `person['name']['last']`.

### When to use bracket notations instead of dot notations?
When the _key_ is a variable, you'll have to use brackets.

For example:

```javascript
var key = age;
person[key]; // will return 29
person.key; // will return an error
```

### Setting object members

We've shown you how to _get_ values, now we'll show you how to update or create them once the object already exists.

Let's say I've had my birthday and I want to change the age key. Easy, just type this in the console:
`person.age = 30;`
person.age will have a value of 30.

I can even add properties and methods after the creation of the objects:

```javascript
person.eyes = 'grey';
person.sayYo = function(){console.log("Yo!")}
```

### Deleting key/value pairs

I don't want people to know my age anymore, so I delete this key/value pair from my object:

`delete age`

Writing Specs for Objects
----
When we write specs for an object, we want to plan out what we expect each property and method to be.
The above example will then be specified like this:

person: an object
+ properties:
  + name: an object with two properties
    +  first: first name of the person (string)
    +  last: last name of the person (string)
  + age: age of the person (number)
  + gender: gender of the person (string)
  + interests: an array of interests
+ methods
  + bio
    + args: none
    + return: a string describing the person
    + behavior: concatenate the above properties in a sentence
  + greeting
    + args: none
    + return: a string with a greeting
    + behavior: concatenates the greeting with the first name of the person

Resources
---

+ Learn more about Object built-in methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Objects")

+ [Objects: the basics](http://javascript.info/object-basics "Object basics")

Exercises
----

+ clone [this repo](https://github.com/RienCosyns/objects)
+ Go over [bank account example](https://github.com/jankeLearning/content-code/tree/master/Week%2001/objects). Go only to the next one once you understand what each script does.
+ wonderful video: https://www.youtube.com/watch?v=rlLuL3jYLvA