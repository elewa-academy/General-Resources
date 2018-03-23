Testing apps without the frontend
===

A great way of testing API's without going to the hassle of writing code, is using an application called Postman. Postman is a great tool when trying to dissect RESTful APIs made by others or test ones you have made yourself. It offers a sleek user interface with which to make HTML requests, without the hassle of writing a bunch of code just to test an API's functionality.

> Download it [here](https://www.getpostman.com/postman)

Let's go back to the random user generator api example. Instead of writing out a whole new route and function to perform the request, then I would have to specify with more code what I want the response to look like, and finally I would have to print out the response to the console or provide some other way of actually viewing the response. Granted, I would probably need to write all this out anyway to make a functioning app using this API, but doing all this to simply test an API's functionality is unnecessarily tedious and time consuming when something like Postman exists.

With Postman, such a test is much more streamlined. All I have to do is plug the route into the address bar, select the GET response method on the dropdown box to its left, specify that I want the response in “pretty” JSON format, and hit send. Then, I get the response data in easy-to-read JSON with a status code of 200, confirming the GET request was successful. It’s that simple!

Postman let's you also add headers. Let's say we want to make use of the Google Maps API, for which we need an API key. We could then simply add this api key as a header and hit send. 

Forms and post requests
---

We could also use Postman to test post requests (sending data **to** the api), actually Postman supports all HTTP requests, but we'll focus on post here.

Testing a post request isn't that complicated. You first select the POST method instead of GET. You'll notice that you now have access to the _body_ of the request. Here you'll have to define the format with which the data will be sent. If you're planning to use HTML forms (for example user registration), you'll need to select the **x-www-form-urlencoded** option. This will make it possible to send key-value pairs to the api. If it works, you should then get some kind of success message.

