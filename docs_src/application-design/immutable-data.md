# Immutable Dataflow

Immutability is taking the idea of pure functions and taking it all the way home.  

Roughly speaking, its the idea that everything in your program is either a pure function or a piece of data.  Pieces of data can never ever be changed under any circumstances.  Rather than modifying data, you create new copies that are different from the original.  
  
So far we have had our model hold the single and only copy of state, our whole app was secondary to the database.  Modern apps are more and more distributed, state is more and more dynamic. This change gives a lot of flexibility and power but also opens your app up to enormous bugs.  What if two users update the same db entry at the same time and the changes aren't synced?  

Immutable data is a design strategy to help fight this risk.

The concept is simple enough, integrating it effectively into an application is quite a bit trickier.  You will have plenty of chance to practice with REACT.
___
### Resources

* [better, longer video](https://www.youtube.com/watch?v=4LzcQyZ9JOU)
* [short video](https://www.youtube.com/watch?v=DOk8Jxg5CQI)
* [sitepoint](https://www.sitepoint.com/immutability-javascript/) - long article
* [McCormick](https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2/) - shorter article
* [es6 tricks](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)
* [Quora answer](https://www.quora.com/What-are-the-pros-and-cons-of-using-Immutable-js-vs-lodash-underscore)  
* [in react](https://medium.com/react-weekly/embracing-immutable-architecture-dc04e3f08543)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>