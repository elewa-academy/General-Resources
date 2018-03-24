# Event Driven Programming
It means (basically) that your program sits idle waiting for something to happen. External forces (clicks, scrolls, server requests) trigger an _event_ which starts some process, changing the state of your program.  With _Event Driven Programming_ your program is 'incomplete' without a user or some other application to interact with it - nothing will happen! This is a default paradigm in UI and server design. 

EDP is different from _Procedural Programming_.  In procedural programming you write what is supposed to happen in what order and decide what values variables will have.  In EDP you write a bunch of functions and wait for them to be triggered, arguments are usually decided when the function is triggered.  
The frontend projects you have made so far contain a little bit of each:   
* _Procedural_: The insides of your event listeners are procedural.  They contain a series of function calls and logic to be carried out in the order they are written.
* _Event Driven_: The application rendered by your HTML is event driven.  It sets itself up and sits idle until a user does something.  The developer doesn't decide what will happen when or what arguments will be passed into event functions.

EDP is compatible with OOP and Functional Programming - events can trigger methods and pure functions.  It is also intimately related to the _asynchronous_ aspects of JS.

___
### Resources
* [Great intro from Techopedia](https://www.techopedia.com/definition/7083/event-driven-program)
* [EDP discussions on Quora](https://www.quora.com/Why-is-front-end-development-more-technically-complex-than-back-end-development)
* Experiment with Loupe.
* [simple, x-ample-based](http://storm.cis.fordham.edu/~mesterharm/2350/event.html)
* 

___
### Advanced Resources
* [In node backends](https://www.eduonix.com/blog/web-programming-tutorials/learn-event-driven-programming-node-js/)
* [EDP for loose coupling](http://michd.me/blog/event-driven-javascript-a-simple-event-dispatcher/)
* [JS EDP frameworks](https://www.oreilly.com/ideas/event-driven-application-design-with-javascript)
* [Eventemitter module](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>