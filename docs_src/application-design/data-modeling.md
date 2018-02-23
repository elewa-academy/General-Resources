# Data Modeling 1

Now that you're separating your apps into MVC you need to store your data separately from everything else.  Your data doesn't need to be stored anything like how it's displayed, it's the view object's responsibilty to make sure our data is readable.  This leaves you free to organize our data however you want; arrays, objects, variables, data-objects, you name it.

After you become comfortable with the idea of a decoupled view and data store, you have much more liberty in designing your apps.  You also have a whole new set of decisions to make - _how to organize, store, and retrieve your data_.
  ___
### Who Uses Your Data For What?

> Apps = Data + Interaction

After you are clear on what data your application needs, the first 2 questions you should ask yourself are ...
* What interactions will my model need to support? 
* What's the simplest possible way to implement those interactions?

Only after you can answer these questions should you begin writing your data model.
The backbone of your application is the model.  If the model is inefficient your app will be slow. Ff your data is stored in a convoluted way your view will be diffcult to write. If the model isn't logicial other people will have diffculty understanding what your app is for. 

Data modeling is a gigantic topic, you could make a career out of it.  We will be exploring it in more detail with later lessons and projects.  For now stick to these two questions as you begin to develop an intuition for good data practices.

As you work your way through the _tictactoe_ and _battleship_ projects either look at the code we provide you or the code you're writing and ask yourself - What's happening from the data's point of view?  Could this be better?
___
### Simple Exercises
Open a fresh JS file and create an empty array, an empty object, and a few empty variables.  Below is a list of operations to carry out in order.  You will go through the list 3 times, once using the array, once with the object, once with the variables (not necessarily in that order).  Take note of which operations are easier with which data structure and write a paragraph describing when you might want to use one or the other.

1. Save the string 'one'
2. Save the string 'two'
3. Console.log the stored string 'one'
4. Replace the string 'one' with 'three'
5. Delete the string 'two'
6. Save the sting 'four'
7. Console.log all saved strings with one console.log statement
8. Count the number of strings you have saved in your program, console.log the number.
9. Save another copy of the string 'four'
10. Print the first saved 'four'
11. Print the second saved 'four'
12. Delete 'three'
13. Can you carry out operations 10 and 11 with the same exact code?



