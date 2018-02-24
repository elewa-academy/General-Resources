Browsers
===

According to Wikipedia a web browser is a " software application for retrieving, presenting and traversing information resources on the World Wide Web."

Link to lecture: https://docs.google.com/presentation/d/1RTzaAILum1I7MsErjw5z-OCCawgeC-pUJYZG0r1qwmE/edit#slide=id.g1d1e49e639_0_828

What is the Document Object Model (DOM)
----

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

The DOM is a programming API for documents. It is based on an object structure that closely resembles the structure of the documents it models. For instance, consider this table, taken from an HTML document:

```HTML
      <TABLE>
      <TBODY> 
      <TR> 
      <TD>Shady Grove</TD>
      <TD>Aeolian</TD> 
      </TR> 
      <TR>
      <TD>Over the river, Charlie</TD>        
      <TD>Dorian</TD> 
      </TR> 
      </TBODY>
      </TABLE>
```
A graphical representation of the DOM of the example table is:

<img src="https://www.w3.org/TR/DOM-Level-2-Core/images/table.gif" />

JS Runtime
---
A page does not just get rendered, but is read from top to bottom; as it reads the browser tries to load execute and read all the external js, css, images and video.

A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

> onclick=_JavaScript_

Examples of HTML events:

+ When a user clicks the mouse
+ When a web page has loaded
+ When an image has been loaded
+ When the mouse moves over an element
+ When an input field is changed
+ When an HTML form is submitted
+ When a user strokes a key

In this example, the content of the <h1> element is changed when a user clicks on it:

> <!DOCTYPE html>
> <html>
> <body>
>
> <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
>
> </body>
> </html>

HTTP
---

We'll let Harvard explain it... 

http://cs50.tv/2012/fall/shorts/http/http-720p.mp4


External Resources
---
+ https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
+ https://www.w3schools.com/js/js_htmldom_events.asp
+ How does the internet work:
    + part 1: https://www.youtube.com/watch?v=e4S8zfLdLgQ
    + part 2: https://www.youtube.com/watch?v=FTAPjr7vgxE
+ Everything - http://taligarsiel.com/Projects/howbrowserswork1.htm#The_main_flow

Developer Tools
===

## What are developer tools? 
All of the most popular modern web browsers include a suite of tools designed to help with the development of websites; they are also sometimes referred to as the web inspector. These tools allow you to inspect the html, css, javascript and much more on websites you visit and build.

## Why do you need to know how to use them? 
Knowing how to use your browsers developer tools is an indispensable skill for a web developer. They allow you to easily and quickly track down the cause of issues and bugs like problems with layout or other css hiccups. What might have taken an hour or even a few hours to track down and fix without the use of these tools often takes a matter of minutes or even seconds with the help of developer tools.

Although they offer you so many useful capabilities, learning how to use the developer tools isn't that difficult. It can feel clunky the first few times you use them. But with a little practice, you will soon find yourself comfortably using them to experiment and fix bugs with ease on your web pages.

ChromeDev
---

Complete the first two chapters of this [short course](http://discover-devtools.codeschool.com/) from Codeschool, it covers all the main capabilities developer tools provides.

Make sure you can answer yes to each of the following once you have finished the course above:

* You can open the developer tools in your browser.
* You can select a specific html element in your page with dev tools.
* You can you use developer tools to experiment with the css on specific elements on a web page.

External Resource
---
https://developers.google.com/web/tools/chrome-devtools/