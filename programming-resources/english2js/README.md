# From English to JavaScript
When learning to program the first barrier you reach is the language itself: 
1. syntax, data types, operators, scope, context, ... 

Very quickly afterwards you reach a much more substantial barrier, one that will always be there:  going from a blank page and a challenge, to finished code.

This second problem is much more difficult. It requires creative AND logical thinking, a toolkit of remembered solutions, but most importantly it requires a good mindset and some helpful habits.  This lesson is inteded to get you started on the path to good habits and a helpful mindset.

This lesson contains some __principles__ to keep in mind and a __procedure__ you can try out.
___
### Principles

TL;DR - 
1. Keep your working memory clear - 
    * Let clear code, good habits, and careful planning do the hard work for you.
2. Don't try solving anything you can't hold in your head all at once -
    * If you find yourself with too much going on for you to keep straight, you probably did a bad job with # 1.


Listed below are some good tricks to keep in mind when approaching a coding problem:

* Rephrase the question until it looks like a function description:
	- Arguments, Return Value, Behavior.

* Break the problem into pieces you DO know how to code. Think of your final solution as being smaller solutions stuck together. 
    * Besides helping your follow rule #1, this will make debugging and code re-use easier.

* Save every attempt you make, and save every step of every attempt. GIT!!
	* This will allow you to 'reset' if you go down a wrong path.
	* For problems that you find difficult, create a series of js files like the demoSteps in this directory.  This will help you study your process and your mistakes easier than a series of git _commits_ and _branches_.

* Work from a sample of simulated input/output pairs whenever possible.
	* Choosing the BEST examples is a tricky skill. For now just choose some simple ones that come to mind.

* Fall back on things that work and you are familiar with (built-in language features, code you already wrote, ..).
	* This will help you spot where the bugs are in your code (since you already know where NOT to look).
	* DRY.  Don't repeat yourself.

* Favor readable code over elegant or efficient solutions.
	* Everyone will thank you, including your future self.




___
### A procedure to try out
Here's a rough procedure you can use to tackle a coding challenge.  Feel free to mix and match, add or skip steps.  This is just a place to get started.

0) Understand the question, rephrase it until you get it.

1) Write the problem in short non-confusing english sentences. The more and the shorter the better.  In general this will bring your english closer to pseudocode and make the transition to coding simpler.

2) Make a little list of anything that could be mesured or counted.  These will become the list of potentially important variables you'll need to include in your solution.

3) Describe the possible types of inputs. i.e Even or Odd. String, Integer, or undefined. etc.    

4) Write down some input/output pairs that cover all the types of inputs you can expect.

5) Create a skeletal function (all necessary variables declared, return value, args, ...) filled with your short senteces where the logic would go.

6) Refactor your sentences, replacing them with javascript one at a time as they look like something you know how to code.  Repeat

7) Once it works, pass some tests and enter an optional refactor phase. 



___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
