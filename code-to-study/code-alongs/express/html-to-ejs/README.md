# TIC TAC TOE 3 - Simple Express and Server Side Rendering
Simple Express application with DOM manipulation moved into SSR (server side rendering) with EJS.

Your assignment:  
1. Make 2 objects from the old tictactoe stuff.  The first will be the controller, the second a model.    
    * (there is no need for a view object, all of it's funcitonality will be moved into EJS files).
3. Require the controllers and model into your app.js
4. Embed the controller into middleware.  either:  
    * a singe middleware with params  
    * a bunch of middleware with no params  
    * or somewhere in between  
5. Make it work! The controller will still call the model object.  Where it would call a view method, it will render an EJS template.  Your middleware shouldn't be much longer than 3-4 lines, enough to gather params and call the controller object.  All the logic will be in the controller file.
