The DOM and JS
====

Lecture about the DOM: https://docs.google.com/presentation/d/13ir7s_Ll8cE6SgT4ub9SMcSHLRhPYPjcQLNxBuuZ69g/edit#slide=id.g1d1e49e639_0_5

Basic DOM manipulation
---

Go through chapter 2 - 4 from [this github page](https://github.com/oneuijs/You-Dont-Need-jQuery#query-selector)

After finishing these chapters you should have a basic grasp of traversing through and manipulating the DOM.

External Resources
---
+ W3 Schools: https://www.w3schools.com/js/js_htmldom.asp
+ You don't need JQuery: https://github.com/oneuijs/You-Dont-Need-jQuery
+ But if you really want to: https://www.codecademy.com/learn/jquery

---------------
DOM 2
--------------

The DOM is far more than just div elements.  When you open an HTML file in a browser, the browser builds a virtual representation of all the elements - the __Document Object Model__.  That representation takes the form a _tree_ data structure.  When your JS manipulates the page it doesn't manipulate the HTML directly, it modifies the DOM tree which modifies what you see.
* "JavaScript is a language that the browser reads and does stuff with. But the DOM is where that stuff happens. In fact a lot of what you might think of as a "JavaScript Thing" is more accurately a "DOM API"."  - [css-tricks](https://css-tricks.com/dom/)

Most browsers also go through a predictable series of events when loading a page.  Learning to take advantange of this predictable sequence is crucial for building fast, light, reactive frontend apps.
___
### DOM Resources

* [Our slides presentation, DOM events and page lifecycle](https://docs.google.com/presentation/d/1RTzaAILum1I7MsErjw5z-OCCawgeC-pUJYZG0r1qwmE/edit#slide=id.g1d1e49e639_0_5)
* [w3schools tutorial](https://www.w3schools.com/js/js_htmldom.asp)
* [In-depth, elequent javascript](http://eloquentjavascript.net/13_dom.html)
* [In-depth, mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

___
### Page Lifecyle Resources
* [Breck McKye explains](http://www.breck-mckye.com/blog/2014/04/document-loading-and-DOM-lifecycle-events/)
* [Codeproject](https://www.codeproject.com/Articles/26033/The-Page-Life-Cycle-of-Client-Browser)
* [From taligarsiel](http://taligarsiel.com/Projects/howbrowserswork1.htm#The_main_flow)
* [Ced, from Stackoverflow](https://stackoverflow.com/questions/44044956/how-does-browser-page-lifecycle-sequence-work)


___
### Advanced Optimization Resources
* [Google's guide to optimizing for frontend](https://developers.google.com/web/fundamentals/performance/)
* [Udacity course](https://www.udacity.com/course/browser-rendering-optimization--ud860)
* [a github readme](https://github.com/vasanthk/browser-rendering-optimization)
