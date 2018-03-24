Environmental Variables
====

Working with environment variables is a great way to configure different aspects of your Node.js application. Many cloud hosts (Heroku, Azure, AWS, now.sh, etc.) and Node.js modules use environment variables. Hosts, for example, will set a PORT variable that specifies on which port the server should listen to properly work. Modules might have different behaviors (like logging) depending on the value of NODE_ENV variable.

Accessing environment variables in Node.js is supported right out of the box. When your Node.js process boots up it will automatically provide access to all existing environment variables by creating an env object as property of the process global object. If you want to take a peek at the object run a console.log in your node app:

```javascript
var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("App is running with " + process.env)
})
```

This code should output all environment variables that this Node.js process is aware of. To access one specific variable, access it like any property of an object:

```javascript
console.log("Server is listening on port " + process.env.PORT) 
```

You should see that the value of `port` is undefined on your computer. Cloud hosts like Heroku or Azure, however, use the PORT variable to tell you on which port your server should listen for the routing to work properly. Therefore, the next time you set up a web server, you should determine the port to listen on by checking PORT first and giving it a default value otherwise:

```javascript
var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}` );
})
```

The console.log will display the value of PORT if available or 3000 by default.

Loading variables dev vs prod
----

[an article](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html)  
[our example](https://github.com/jankeLearning/content-code/tree/master/Week%2005-6/2-environmental-variables)  
[another article](https://medium.com/@rafaelvidaurre/managing-environment-variables-in-node-js-2cb45a55195f)  


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>