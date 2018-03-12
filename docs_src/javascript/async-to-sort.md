

## Ajax

### Asynchronous JavaScript and XML


AJAX is a set of Web development techniques using many Web technologies on the client side to create asynchronous Web applications. With Ajax, Web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for Web pages, and by extension Web applications, to change content dynamically **without the need to reload the entire page**. In practice, modern implementations commonly substitute **JSON** for XML due to the advantages of being native to JavaScript.

AJAX calls are made by using the XMLHttpRequest (XHR) object. This is an API in the form of an object whose methods transfer data between a web browser and a web server. The object is provided by the browser's JavaScript environment. We won't go too deep into this object, if you want to know more you read up about [here](https://www.w3schools.com/xml/dom_httprequest.asp). We will instead focus on so-called Promise-based httpRequest API's such as the more recently built-in API Fetch and third-party modules such as Axios and SuperAgent.

Exercises
---


[TOP](#index)

---

## Fetch


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

[TOP](#index)

---

## Axios


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


[TOP](#index)

---

## Promises


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


External Resources

https://bevacqua.github.io/promisees/
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
