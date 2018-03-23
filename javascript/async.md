# Asynchronous Programming

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