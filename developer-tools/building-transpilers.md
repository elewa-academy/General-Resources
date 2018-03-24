> This file refers to [this project](https://github.com/jankeLearning/projects/tree/master/04-be-you-tube)

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

# Bundling with Node

This is a long lesson, you may appreciate the clickable index.  Consider starting with the Summary:
* [Intro](#intro)  
* [Browsers and ECMA]()  
* [Our Gulpfile](#our-gulpfile)
* [Gulp and Tasks](#gulp-and-tasks)
* [Mini Quiz](#mini-quiz)
* [JS Task](#js-task)
* [The Other Tasks](#the-other-tasks)
* [Mini Exercises](#mini-exercises)
* [Summary](#summary)
___
# Intro
So far our front-end apps have been simple little things.  We've written them in es5, loaded all the files individually, and run the code exactly as we wrote it in the files.  Life won't always be so simple.

As your apps become more sophisticated you'll begin using syntax and libraries that aren't supported by all browsers. You'll want to serve your app as a single file rather than publicly hosting all the source code.  Your apps will become much larger and you'll want to compress them before serving them.  You'll want to configure the app before serving it to accomodate different types of users. You'll want to test your app in the backend using simulated users. Dot dot dot.

All of these advanced development techniques will require converting the source code you write into production code your users will run.  This is called 'packaging' or 'bundling'.The world of packaging is ENORMOUS.  Welcome to our tiny introduction.
___
# Our Gulpfile
To contain the scope of this lesson and to give everything a practical grounding this lesson will break down the script we have provided for the 'Be You Tube' project.  Below is a short description of what each module does followed by the cli command to run the script, and the script itself.  Take a few minutes trying to decipher the script yourself before moving on to the explanations.

The modules it uses:
* _Gulp_:  Automated task runner. You will always be running 'gulp watch' in one tab of your terminal.  It will watch the files in your project's source code. Every time you save a change in any file it will rebuild your whole application into the 'bundle.js' file in the 'public' folder.  This ensures that the most up-to-date code is always available in the brower AND saves you the trouble of doing it by hand.
* _Browserify_: Formats code to be browser-compatible.
* _Babel_: Converts es6 into es5.
* _Vinyl Source Stream_: File io.  (?)

The cli command you will run:
```shell
gulp watch
```

The script itself:
```javascript
var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task("js", function() {
  return browserify("./src/app.js")
    .transform(babelify, {
      presets: ["es2015"]
    })
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./public"));
});

gulp.task("default", ["js"]);

gulp.task("watch", function() {
  return gulp.watch("./src/**.js", ["default"]);
});
```
___
# Gulp and Tasks
A _task_ is something you'd like to automate, a series of commands that you have to carry out often and would be tedious to do by hand.  In this way gulp tasks are similar to [shell scripts](https://github.com/jankeLearning/content-md/blob/master/dev-knowledge/04-sh-scripts.md).  The main difference between a gulp and a shell script is that gulp tasks can be configured to execute automatically.  (It is possible to write a gulp task that executes a shell script automatically whenever something specific happens.) You declare all of your gulp tasks in 'gulpfile.js'.

To execute a gulp task, type 'gulp' in the command line followed by the name of the task you'd like to run.  In our script that means you have 3 choices:
```shell 
gulp js
gulp default
gulp watch
```
Notice you don't need to type 'node gulp js'.  This is because there are actually two gulps:
* __gulp-cli__: A CLI application not written in JS.  You install this once, globally.  It is the CLI that is responsible for parsing your 'gulpfile.js' into executable tasks, for noticing when saves are made, and for dealing with all the file i/o.
* __gulp__: This is installed locally via 'package.json' and required into your 'gulpfile.js'.  This provides you with the JS library required to define tasks that the gulp-cli can interpret.
 
Hopefully by now you can look through the script above and recognize a few things about how gulp works:
* 'gulp.task' is a method on the gulp object.  Each task is given a name and is run when the CLI calls it by name.
* 'gulp.task' takes 2 args  
    * name: string 
    * callback: function || array of task names 
* The callbacks return the return values of some other function (statemements on the right side of a 'return' are evaluated before they are returned).  Why and how this works is nls and beyond the scope of writing simple tasks.
 
For more info on using gulp check the [documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md).
___
# Mini Quiz 
What would you enter in the terminal to run these scripts? 
What would be their behavior? 
``` javascript
gulp.task('hia', function(){console.log('hia')} ); 
gulp.task('hib', function(){return console.log('hib')} );
```
___

# JS Task
We be breaking this down:
```javascript
gulp.task("js", function() {
  return browserify("./src/app.js")     // 1
    .transform(babelify, {              // 2
      presets: ["es2015"]               // 3
    })                                  // 4 
    .bundle()                           // 5
    .pipe(source("bundle.js"))          // 6
    .pipe(gulp.dest("./public"));       // 7
});

// rewritten with intermediate values
//  check this - is it promises?  if so i gotta scratch this
gulp.task("js", function() {
    var browserified = browserify("./src/app.js");     
    var transformed = browserified.transform(babelify, {             
                                                    presets: ["es2015"]          
                                                });                 
    var bundled = transformed.bundle();  
    var piped_1 = bundled.pipe(source("bundle.js"));
    var piped_2 = piped_2.pipe(gulp.dest("./public"));
    return piped_2;
});
```

This task does all of the 'real work'.  It browserifies the designated file, transpiles the code to pure es5, bundles it into a giant browser-friendly file, writes it to a file, and puts that file where you want it.  Break it down now:

#### Line 1
> This is the most involved line.  There are 2 things happening.

>    1 -  'return'.  The callback returns something.  Just how this works is nls, it requires an understanding of how the gulp CLI works. Ignore this for now.
    2 - Pass browserify the _entry point_ to your app.   An __entry point__ is the single file that pulls your whole app together.  These will become more important when we hit node.

> The importance of this line is to set the bundling process in motion by pulling all the code from all your files into a single browser-friendly file.  You have planned your app (through 'exports' and 'requires') be entirely executable from a single file.  This is helpful now for testing in node, and later when you're writing front-end apps.
Try exploring this line of code's inermediate value.

#### Lines 2-4
> These lines pass the assembled application through babel, transpiling your code into es5.  This is done for browser support.  

> For a hands-on eploration of Babel, checkout their [live demo](https://babeljs.io).  Here's also a good [interactive tutorial](https://github.com/stujo/javascript-babel-tutorial).  

#### Line 5
> what does this do

#### Line 6
> Pipe the result from line 5 into a file called 'bundle.js'.

> __Pipe__ is originally a shell command, this and the next line use a module that enables your JS script to access your operating system. Piping takes the result of one command line operation and sends it directly as an argument to another.  It's like composing functions in JS:  f1(f2(arg)).  
Check out this [resource list](https://github.com/jankeLearning/content-md/blob/master/dev-knowledge/04-sh-scripts.md) to learn more. 

#### Line 7
> Designate a relative or absolute location for that file to end up.

(For more info on the 'bundle', 'transform', 'browserify', 'pipe' methods check the [docs](https://github.com/browserify/browserify#usage).)

So the 'JS' task accesses your source code, bundles it, translates it, and places that bundle where it belongs.  What's left?
___
# The Other Tasks

The two remaining tasks ('default' and 'watch') are much shorter:
#### 'Default' Task:
```js
gulp.task("default", ["js"]);       
```
This is a very simple task, a perfect example of how the array feature of 'task' syntax works.  You are simply wrapping a few tasks into one meta-task.  Check out the second mini-exercise to figure out how this works.


#### 'Watch' Task:
```js
gulp.task("watch", function() {
  return gulp.watch("./src/**.js", ["default"]);
});
```
'Gulp.watch' is responsible for noticing changes in the designated files.  The first arg (string) gives a path augmented with some regular expressions.  Changes in any files under this path's umbrella will trigger the callback(s) in the second argument, in this case the 'default' task.
Notice that to understand 'gulp watch' you have to read backwards through callback arrays.
___
# Mini Exercises
1. What happens if you remove the brackets from the second argument in 'default' or 'gulp.watch'?
2. Find 2-3 ways to run the 'hia' task whenever 'watch' is triggered.
3. Can you create or modify a task to create an infinite loop of tasking?
4. Run 'gulp js', 'gulp default' and 'gulp watch' in terminal.  How do they behave differently?
5. Create a file in 'src' with an extension other than '.js'.  Run 'gulp watch', modify the new file and observe what happens in your terminal.  Can you change this behavior?

___
# Summary
Key points:
* Gulp is a CLI and node module that allow you to write automated CLI tasks in a JS file.
* Tasks are defined with two arguments: 
    * a string name
    * a callback or array of tasks
* 'Gulp.watch' returns a process that watches the designated directory for changes in files with a designated extension.

This sums up our tiny introduction to gulp and tasks.  There is much more to babelify and browserify, and we didn't say anything about vinyl. Covering those would open another wormhole, and they aren't relevant to Being YouTube.

Back to the [TOP](#bundling-with-node)

Here's an [article](http://egorsmirnov.me/2015/05/25/browserify-babelify-and-es6.html) that's a different perspecive on this same type of script.




___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>