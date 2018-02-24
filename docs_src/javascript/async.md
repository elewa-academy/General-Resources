Async 1: Callbacks
====

JavaScript is asynchronous
---

### Synchronous Code
In _synchronous_ programs, if you have two lines of code (L1 followed by L2), then L2 cannot begin running until L1 has finished executing.

You can imagine this as if you are in a line of people waiting to buy train tickets. You can't begin to buy a train ticket until all the people in front of you have finished buying theirs. Similarly, the people behind you can't start buying their tickets until you have bought yours.

### Asynchronous Code
In _asynchronous_ programs, you can have two lines of code (L1 followed by L2), where L1 schedules some task to be run in the future, but L2 runs before that task completes.

You can imagine as if you are eating at a sit-down restaurant. Other people order their food. You can also order your food. You don't have to wait for them to receive their food and finish eating before you order. Similarly, other people don't have to wait for you to get your food and finish eating before they can order. Everybody will get their food as soon as it is finished cooking.

Note that asynchronous does not mean the same thing as _concurrent_ or _multi-threaded_. JavaScript can have asynchronous code, but it is generally **single-threaded**. This is like a restaurant with a single worker who does all of the waiting and cooking. But if this worker works quickly enough and can switch between tasks efficiently enough, then the restaurant seemingly has multiple workers.

Let's show this with an example:

```javascript
// Say Hello
console.log("Hello");
// Say Goodbye 2 seconds from now
setTimeout(function(){
    console.log("Goodbye")
}, 2000);
// Say Hello again
console.log("Hello");
```

How do you expect this code to be run? In which order will the three statements be executed? Run the code in the console to check if your thought were correct.

Because of its asynchronousity JS will not wait until the setTimeout function is finished before it moves on to the next line. Instead it will store the code momentarily away in a _callback queue_ and execute the next line.

Watch this great [video](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) to have a better understanding of how this works. It has also has a litte sandbox where you can test this out.

Understanding asynchronousity is the bread and butter of JS and web development. Often you will send requests to API's and you'll want to do something with the response. If you misunderstand JS, you will run into a whole lot of trouble. JS has a couple of ways to handle this kind of requests. The _traditional_ way and the one you absolutely need to know if you want to find a job in this field is called a _callback function_. We'll describe this more in detail in below. Later we'll also talk about **Promises**, which were introduced with ES6 to tackle these kind of problems. With the advent of ES7 you now also have something called _async functions_, but these only run in Google Chrome for now and we won't go deeper into those.

Callbacks
---

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

Asynchronous JavaScript and XML: AJAX
----

AJAX is a set of Web development techniques using many Web technologies on the client side to create asynchronous Web applications. With Ajax, Web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for Web pages, and by extension Web applications, to change content dynamically **without the need to reload the entire page**. In practice, modern implementations commonly substitute **JSON** for XML due to the advantages of being native to JavaScript.

AJAX calls are made by using the XMLHttpRequest (XHR) object. This is an API in the form of an object whose methods transfer data between a web browser and a web server. The object is provided by the browser's JavaScript environment. We won't go too deep into this object, if you want to know more you read up about [here](https://www.w3schools.com/xml/dom_httprequest.asp). We will instead focus on so-called Promise-based httpRequest API's such as the more recently built-in API Fetch and third-party modules such as Axios and SuperAgent.

Exercises
---

+ Go [here](https://github.com/jankeLearning/content-code/tree/master/Week%2003/callbacks)
+ [watch this and play with the site](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)  
+ [a great article](http://callbackhell.com)  
+ [some slides](https://docs.google.com/presentation/d/16O1__rTtownarL_6n70RhavYkPjvZJOCtfEqQOeDt18/edit#slide=id.g179b920802_0_56)  
+ [JS callback conventions](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
+ [more on js callback conventions](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
 

Project
---

Click [here](https://github.com/jankeLearning/projects/tree/master/03-callbacks%2Bdata_models) to go the project.


Fetch
===
The Fetch API is a built-in javascript interface for fetching resources (including across the network).

It has a relatively simple syntax and it uses Promises to handle results/callbacks.

The syntax looks like this: fetch(_URL_(required), _options_(optional)).then(_response_).catch(_error_).

So fetch sends a _request_ to an url to retrieve data from, and optionally some options, such as method (GET,POST,...). It will return a _response_ which can be handled in the `then` statement.

Let's make a request to an API. Introducing the Random People API!!

```javascript
fetch("https://randomuser.me/api/")
  .then(response => response.json()) // wil return JSON so let's parse that
  .then(data => console.log(data)) // let's examine what this returns

// I only want the name:

fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => alert(data.results[0].name.first + " " + data.results[0].name.last))
```

[Fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
[headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers)
[Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
[Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)

---

Axios
===

Axios is a third-party module used in the browser and node to make request to internal or external API's. It makes use of the built-in XMLHttpRequest object to send or retrieve data.

As this is a third-party module it will need to be imported into your global environment. 

### Examples

```javascript
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// performing a post request
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });  
```

External Resources
---

+ Axios: https://github.com/mzabriskie/axios
+ https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237


-------

Async 2: Promises
===

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. A promise may be created using its constructor. However, most people are consumers of already-created promises returned from functions. This segment will therefore explore consumption of returned promises first.

Essentially, a promise is a returned object you attach callbacks to, instead of passing callbacks into a function.

### Syntax

We won't worry about the Promise constructor just now. If you're interested you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promises").

What you need to know now is how to handle API's that return a Promise-object. We will talk about a couple examples of this later.

For now this is the syntax you need to worry about:

function(_arguments_).then(_onfulfill_).catch(_onreject_).

1. function returning a promise: this is a function that will return a Promise-object, i.e it will send a _request_ and receive a _response_ back which will have to be _fulfilled_ .
2. When the promise has been _fulfilled_ we write code in the _thenable_ what should happen next.
3. If the promise failed or has been _rejected_, we write code in the _catch_ statement for error handling.

Let's look back at our previous example to see the difference: 

```javascript
//with a callback
function getData(inputData, callback){
    db.push(inputData);
    callback(inputData);
};

getData(userData, printData);
```

Let's assume getData returns a Promise, to resolve it would look something like this:

```javascript
// instead of a callback we add a thenable
getData(userData)
  .then(function(result){
      return printData(result)
      })
  .catch(function(error){return error})

// or in ES6
getData(userData).then(result => printdata(result)).catch(error => error)  // much neater
```

![](https://mdn.mozillademos.org/files/8633/promises.png)

### Promises vs Callbacks
Unlike old-style passed-in callbacks, a promise comes with some guarantees:

+ Promises will never be called before the completion of the current run of the JavaScript event loop.
+ Promises added with .then even after the success or failure of the asynchronous operation, will be called, as above.
+ Multiple promises may be added by calling .then several times, to be executed independently in insertion order.

But the most immediate benefit of promises is **chaining**.

### **Chaining**
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a **promise chain**.

Imagine if the `then` statement would also return a promise:

```javascript
doSomething() // returns a promise
  .then(function(result){
      return doSomethingElse(result) // This also returns a promise, so we can chain another thenable
  })
  .then(function(newResult){
      return printNewResult(newResult)
  })
  .catch(function(failure){
      return failure
  })

// Much neater in ES6
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => printNewResult(newResult))
  .catch(failure => failure)
```

### Fetch and Axios
The Fetch API is a built-in javascript interface for fetching resources (including across the network).

It has a relatively simple syntax and it uses Promises to handle results/callbacks.

The syntax looks like this: fetch(_URL_(required), _options_(optional)).then(_response_).catch(_error_).

So fetch sends a _request_ to an url to retrieve data from, and optionally some options, such as method (GET,POST,...). It will return a _response_ which can be handled in the `then` statement.

Let's make a request to an API. Introducing the Random People API!!

```javascript
fetch("https://randomuser.me/api/")
  .then(response => response.json()) // wil return JSON so let's parse that
  .then(data => console.log(data)) // let's examine what this returns

// I only want the name:

fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => alert(data.results[0].name.first + " " + data.results[0].name.last))
```

Axios is a third-party Promise based HTTP client for the browser and node.js. Axios is NOT built-in, so that means we need to import that somehow (more about that in the NPM and module.export sections).

The same code in axios would look like this:

```javascript
axios.get("https://randomuser.me/api/")
.then(response => response.json())
.then(data => alert(data.results[0].name.first + " " + data.results[0].name.last))
```

Exercises
---

Need to create some exercises using API requests and promises

Project
---

Link to Project: https://github.com/jankeLearning/projects/tree/master/04-twitz

External Resources
---
+ From the people at Google: https://developers.google.com/web/fundamentals/getting-started/primers/promises
+ For dummies: https://scotch.io/tutorials/javascript-promises-for-dummies
+ Fetch API: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
+ Axios: https://github.com/mzabriskie/axios
+ you get the gist: https://gist.github.com/domenic/3889970
+ [learning promises](https://colintoh.com/blog/staying-sane-with-asynchronous-programming-promises-and-generators)  
+ a sick [github of examples](https://github.com/vasanthk/async-javascript)  
+ [a library](https://caolan.github.io/async/) to help with async programming.  
+ https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
+ https://scotch.io/tutorials/javascript-promises-for-dummies
+ http://www.telerik.com/blogs/what-is-the-point-of-promises
+ https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261  
+ [video from flo](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH)
