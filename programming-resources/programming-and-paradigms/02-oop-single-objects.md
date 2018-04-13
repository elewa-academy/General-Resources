# OOP - single objects
OOP is one of many programming concepts that are intimidating to approach.  Googling 'OOP' will turn up some pretty incomprehensible langue, take a look through the first sentence of Wikipedia's entry on OOP:
>  Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods. 

Not very helpful unless you've already got an understanding of data, programming, and programming languages.

So what is the OOP paradigm?  We'll start with a better question ...
___
### Why learn OOP ?

OOP is a great first paradigm after the second-nature Procedural Programming. It's the closest to what we have experience with in our regular lives, but still teaches powerful organizational techniques specific to programming.  From life you're used to dealing with self-contained items, nearly everything you ever interact with is a self-contained item.  So why not build our programs from self-contained items?  

At first it may sound intuitive to structure your programs with objects, but this is not always the case.  After the basic examples (cars, people) OOP becomes abstract very quickly.  Effective OOP modeling requires a strong grasp of application dynamics, separation of concerns, and absraction.  This is one of the main sticking points in a beginner programmer's learning path. Don't despair!

With some motivation, let's now ask ...
___
### What is OOP ?

You're here to build apps, so let's take that as a starting point.

Here's how we've defined apps:
> Application = Data + Interaction

The OOP approach says (roughly) this:
> Design your app around your data, and provide each type of data with specifically the interactions it needs.  No more, no less.

The result is something almost intuitive:
```javascript
var app = {
    db: {},
    next_id: 0,
    create: function(newThing) {
        this.db[this.next_id] = newThing;
        this.next_id ++;
    },
    read: function(ID) {
        return // item with that id from this.db
    },
    update: function(ID, new_values_array) {
        // update this.db[id]'s values
    },
    delete: function(ID) {
        delete this.db[ID]
    }
};
```

The app object in this example constitutes an entire (but not so interesting) application.  
It has two properties: db, next_id.  The data is stored in db and is the app's raison d'être, everything else is designed to support user's interactions with db's contents. 
The syntax for JS methods also supports this object/data-centric view.  To call a method, you must first write the object it belongs to -> app.create(...).  Within a method, the syntax also forces you to 'speak' in terms of the object and it's data -> this.db.

So there you have it.  From the OOP perspective, the building block of your application will be units of: 
> **data bundled with functionality**.

Nouns with verbs.
___
### Resource

[from procedural to OOP, a video adventure](https://www.youtube.com/watch?v=rlLuL3jYLvA).

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>


































    

    
