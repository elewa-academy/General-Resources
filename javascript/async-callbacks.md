
## Callbacks


Unlike some other programming languages, in JavaScript you can pass a function as an argument in another function. In JavaScript, functions are **first-class objects**; that is, functions are of the type _Object_ and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves.

Because functions are first-class objects, we can pass a function as an argument in another function and later execute that passed-in function or even return it to be executed later. This is the essence of using **callback functions** in JavaScript.

A callback function, also known as a **higher-order function**, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. A callback function is essentially a pattern (an established solution to a common problem), and therefore, the use of a callback function is also known as a callback pattern.

When you were using event listeners as part of the DOM manipulation, you were already using callback functions!!

```javascript
var someDiv = document.getElementById("someDiv");
someDiv.addEventListener("click", function(){ //This is a callback function! It says, after a "Click" run this function
    alert("I clicked some div");
})
```

Alternatively, you could split up the code like this:

```javascript
var someDiv = document.getElementById("someDiv");

someDiv.addEventListener("click", myFunction); // No parentheses here!

function myFunction(){
    alert("I clicked some div")
};
```

And when you see this code, do you have a better understanding of what it does:

```javascript
var arr = [1, 2, 3];
arr.forEach(function(el){ // Yes, that's a callback function!
    return el * 2
})
```

So how would you go about writing functions that take callback functions as arguments? Let's look at this example:


```javascript
var db = [];
// A user data object
var userData = {
    name: "Evan Cole",
    age: 26,
    nationality: "\'Murican"
};

// a function that prints out user data
function printData(userData){
    for (key in userData){
        console.log(key + ": " + userData[key]);
    }
};

// a function that takes as arguments the data and a callback function
function getData(inputData, callback){
    // do something with the data. Store it to a DB for example
    db.push(inputData);
    callback(inputData);
};

//call the function with the data and the callback function
getData(userData, printData);

```

In the above example you want to make sure the printing of the data only happens **after** you've received the data. That's why you write a function that gets data first and then call a second function that prints the data. This way you're avoiding that JS moves on to next line, without having retrieved all the data.

```javascript
// without callback. You've defined a function that gets data from an external API
// you store it in a var
var data = getData(someURI); // connects to a server, gets the data, processes the data,...

// Immediately afterwards, display the data in your page
document.getElementById("someDiv").innerHTML = data;
``` 
Chances are that in above example the page will remain empty! JS will run the getData function, but may move on to the next line before receiving all the data. That's why you need to wrap this up in a callback!

___

## Resources

* [Async Modules Project](https://elewa-academy.github.io/Modular-Design/03-async-modules/)
* [Runtime Visualization](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)  
* [Callback Best Practices](http://callbackhell.com)  
* [Google Slides](https://docs.google.com/presentation/d/16O1__rTtownarL_6n70RhavYkPjvZJOCtfEqQOeDt18/edit#slide=id.g179b920802_0_56)  
* [JS Callback Conventions](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [More Conventions](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
 

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>w