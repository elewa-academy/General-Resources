add in 'dependency injection'

# MVC-LH
Learning this will prepare you for the transition to Express and allow you to reuse your week 3 and 4 projects in Express applications.

#### Table of Contents 
* [Prerequisite Knowledge](#prerequiste-knowledge)  
* [A Diagram](#a-diagram)  
* [A Checklist](#a-checklist)  
* [A Chart](#a-chart) 
* [An Example](#an-example)  
____________
### Prerequisite knowledge:
* __Separation of concerns__ : 
  * WHY -  
    * makes your code easier to read and debug
  * HOW - 
    * by organizing your code based on what it does and where it runs
    * by having self-contained objects 
      * to the outside world,  methods behave like pure functions
      * everything they need to do their job is a _property_, _method_ or _argument_ 
    * by having the least possible interaction between objects
  * WHAT - 
    * MVC-LH architecture
* __Dependancy Injection__ :
  * WHY - 
    * to reuse as much of your code as possible
    * to use the same application in any environment with the fewest changes
  * HOW - 
    * swapping out different code that fits the same specs depending on where you run your project
  * WHAT -
    * having a different _view_ and _handler_ for each environment
    * reusing your _model_, _controller_ and _logic_ behind different _handlers_ and _views_.

 [TOP](#table-of-contents)
___
### A Diagram

Each shape represents an object in your program.  The arrows show which objects arer allowed to call which other objects (objects can use 'this' to call themselves). What you should notice is that there is a one-directional flow from the user event (handler) to a change in the UI (view).

This is because your app is __event driven__.  It sits idle until the user prompts it to change.  After a user triggers an event, tha event is set in motion, triggering a series function calls ending in a _state change_ (new data in memory) --> 
1. The handler recieves and parses the user's action, passing cleaned input values to the controller object.
2. The controller retrieves the application state from the model. 
3. Passing the state and user input as arguments, the controller asks the logic to decide what changes are necessary.  The logic returns the new application state.
4. The controller saves the new state to the model.
5. The controller calls the view with whatever data is needed to redraw the UI.



![](https://github.com/jankeLearning/diagrams/blob/master/code-flow/mvc-lh.png)

[TOP](#table-of-contents) 
___
### A Checklist

Use this checklist to grade your own project.  
If your objects do anything that is not on this list your code is probably wrong.

| __M__  	|   __V__	| __C__  	| __L__  	|  __H__   	|
|:---:	|:---:	|:---:	|:---:	|:---:	|
|   saves data 	|   draws to the UI	|   calls the M, V, L	|   takes in app state	| listens to events   	|
|   returns data	|   	|   use temporary variables	|   makes decisions	|   cleans user data	|
|   	|   	|  	|   returns new app state 	|   passes it to controller	|
| --- | --- | --- | --- | --- |
| can call itself | can call the UI | can call M, L, V | can call itself | can call controller| 

[TOP](#table-of-contents)
___
### A Chart 

See how this architecture makes your life easy, you only have to change the L and H to run your project in different environments.

|   |   __M__	|  __V__   	| __C__  	|   __L__	|  __H__ 	|   
|:---:  |:---:	|:---:	|:---:	|:---:	|:---:	|
|   Termianl   |    js 	|   console.log	|   js	|   js	|   ternimal args	|
|   Browser    |  js 	|   DOM stuff	|   js	|   js	|   events	|
|   Node webapp    |   js	|   EJS	|   js	|   js	|   Express	|

[TOP](#table-of-contents)
___
### An Example

[i make perfect code](https://github.com/jankeLearning/content-code/tree/master/Week%2003/mvc-lh-calc)

[TOP](#table-of-contents)  
___  
### Articles  
  
[this is about layers](http://www.edave.net/2011/03/22/a-layered-node-js-architecture-using-express/)    







___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>