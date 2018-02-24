more in general about why this is needed, how it works, yada

# Node 2 - A Frontend Build Environment
First we saw Node as an app to run JS outside of the browser.  
Later we'll see Node as an HTTP server.  
Now we'll see something in between.

NPM provides us with hundreds of helpful and fun modules. Many of them are only useful for running JS web apps, but not all of them.  Using [Gulp, Babelify and Browserify](https://github.com/jankeLearning/content-md/blob/master/dev-knowledge/04-packaging.md) you can build and export frontend apps developed in Node that can't be run directly in the browser.
___
### Project Inspiration
* [must-read overview](https://www.netguru.co/blog/node.js-in-front-end-development-youre-already-using-it-every-day)
* [Modular frontend apps with Node](https://blog.andyet.com/2015/04/14/frontend-frameworks-to-pair-with-node/)
* [Node for Frontenders](http://jsforallof.us/2015/02/12/utilising-node-and-npm-for-front-end-development-workflow/)
* [How-to gulp and browserify](https://blog.engineyard.com/2015/client-side-javascript-project-gulp-and-browserify)
* [Our YouTube project](https://github.com/jankeLearning/projects/tree/master/04-be-you-tube)

# Module Dot Export and Require
In the browser if your require multiple scripts their variables are all available to each other. In terminal this isn't the case - the node runtime can only execute one file at a time.  

That's why they invented 'module.exports' and 'require()'.

Take a look through [this series](https://github.com/jankeLearning/content-code/tree/master/Week%2003/introToModules) of files to get a hang of this.  It's not complicated, but you've gotta know it.
https://medium.freecodecamp.org/node-js-module-exports-vs-exports-ec7e254d63ac
___
### Fun modules to try
* [is positive](https://github.com/kevva/is-positive)
* [sindresorhus' list](https://github.com/sindresorhus/awesome-nodejs#weird)