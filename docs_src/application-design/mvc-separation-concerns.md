App Architecture 101
===

Model-View-Controller
---
**Model–view–controller (MVC)** is a software architectural pattern for implementing user interfaces on computers. It divides a given application into three interconnected parts. This is done to separate internal representations of information from the ways information is presented to, and accepted from, the user. The MVC design pattern decouples these major components allowing for efficient code reuse and parallel development.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/200px-MVC-Process.svg.png">

As with other software architectures, MVC expresses the "core of the solution" to a problem while allowing it to be adapted for each system. Particular MVC architectures can vary significantly from the traditional description here.

Link to lecture: https://docs.google.com/presentation/d/1DRN0fLdsaxKGuPzvVDqx-7r-HuuzJIALNTOGcLsBp6w/edit#slide=id.g1f5e13c63b_0_7

### Components
The _model_ is the central component of the pattern. It expresses the application's behavior in terms of the problem domain, independent of the user interface. It directly manages the data, logic and rules of the application. <br>
A _view_ can be any output representation of information, such as a chart or a diagram. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants. <br>
The third part, the _controller_, accepts input and converts it to commands for the model or view.

### Interactions
In addition to dividing the application into three kinds of components, the model–view–controller design defines the interactions between them.

A _model_ stores data that is retrieved according to commands from the controller and displayed in the view. <br>
A _view_ generates new output to the user based on changes in the model. <br>
A _controller_ can send commands to the model to update the model's state (e.g., editing a document). It can also send commands to its associated view to change the view's presentation of the model (e.g., scrolling through a document, movement of document).

Exercises
---
Rewrite TicTacToe as an MVC app?
Do [here](https://github.com/jankeLearning/content-code/tree/master/Week%202/2-tictapps)
