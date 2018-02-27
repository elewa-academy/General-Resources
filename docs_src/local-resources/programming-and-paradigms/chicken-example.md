
Imagine you are writing a chicken farm application and you decide to represent each chicken with a separate object.  Now your whole farm can be modeled by having a far object that contains chicken objects: 
```javascript
var marks_chicken_farm = {
        chickens: [ /* ... chicken objects ... */ ],
        feed_chickens_x: function(food_type) {},
        slaughter_x_chickens: function(x) {},
        breed_x_chickens: function(rooster_array) {},
        add_chicken: function(breed, age, health, cost, name) {
                var new_chicken = {
                        species: 'chicken',
                        breed: breed,
                        owner: 'mark',
                        name: name,
                        eat: function(food) {},
                        speak: function() {console.log('squack')};
                    };
                this.chickens.push(new_chicken);
            }
    };
```
Here are some questions you should explore to begin understanding the limitations of object literals:
* What happens if Mark sells his farm and chickens to Clyde?  How would you change ownership for all chickens?
* Now Mark buys back half of the chickens but they still live on Clyde's farm.  Change ownership for those chickens.
* If mark wanted to train his chickens for the stunt industry by teaching them all to sew, what would you have to do to add a 'sew' method to each and every chicken?
* How many new 'sew' methods would need to exist in memory? How many 'eat' methods, how many 'speak' methods already exist in memory?  Are they any different or are they just copies?
* How would you retrain all chickens to say 'baaaak' instead of 'squack'?
* What if he only wanted to have two types of chickens, stunt and regluar?  What would be the differences between a stunt chicken and a regular chicken?
* What if he wanted to teach all of his stunt chickens a new trick?
* Rename all chickens to 'Updike'. 

All of these questions relate to the same concern - what features of a chicken object are shared between all chickens no matter what, and what features are unique to each (or some group of) chicken:
* What happens if Mark sells his farm and chickens to Clyde?  How would you change ownership for all chickens?
    * farm.chickens.forEach(/* change 'owner' */). 
    * Every chicken will have the same owner since the farm was sold with all chickens inside.  Does this mean all chickens will always have the same owner?
* Now Mark buys back half of the chickens but they still live on Clyde's farm.  Change ownership for those chickens.
    * farm.chickens.forEach(/* if on list of sold chickens, change 'owner' */).
    * Nope, all chickens won't always have the same owner. Each chicken can have it's own unique owner but still be on the same farm. 
* If mark wanted to train his chickens for the stunt industry by teaching them all to sew, what would you have to do to add a 'sew' method to each and every chicken?
    * farm.chickens.forEach(/* add 'sew' */). 
    * This is annoying.  What if you could add a single 'sew' method somewhere in your program and have all chicken objects know where to look?
* How many new 'sew' methods would need to exist in memory? How many 'eat' methods, how many 'speak' methods already exist in memory?  Are they any different or are they just copies?
    * Far too many.  Each chicken is doing the exact same thing, yet they all have their own copies of functions.
* How would you retrain all chickens to say 'baaaak' instead of 'squack'?
    * farm.chickens.forEach(/* change speak method */).  
    * Annoying.  They all have the same natural ability to speak, why can't you modify it all in one place?
* What if he only wanted to have two types of chickens, stunt and regluar?  What would be the differences between a stunt chicken and a regular chicken?
    * You could make a new 'add_stunt_chicken' method.  A new constructor that adds a 'stunt' method to it's chickens. 
    * Now you have two types of chickens.  Both types are identical except half also know a stunt. Wouldn't it be nice if you had centralized control over both types?
* What if he wanted to teach all of his stunt chickens a new trick?
    * farm.chickens.forEach(/* if(stunt chicken) {change stunt to 'scuba dive'} */).
    * Wouldn't it be nice if you could modify all stunt chickens' functionalities without modifying the regular chickens?
* Rename all chickens to 'Updike'. 
    * farm.chickens.forEach(/* change name to updike */).
    * Because all chickens are being given the same name, it may seem like all chickens should share a name property.  Untrue.  Names are 1-1 with chickens, they just happen o all have the same name
