Scope
===

Defining Scope
---

In JavaScript, scope refers to the current context of your code. Scopes can be globally or locally defined. Understanding JavaScript scope is key to writing bulletproof code and being a better developer. You’ll understand where variables/functions are accessible, be able to change the scope of your code’s context and be able to write faster and more maintainable code, as well as debug much faster.

### Global Scope

Before you write a line of JavaScript, you’re in what we call the **Global Scope**. If we declare a variable, it’s defined globally:

```javascript
var name = "Rien"
```

Declaring your variables in the global scope is sometimes seen as bad practice as variables could be (unwillingly) overwritten over time. Global scope isn't bad, you need it to create Modules/APIs that are accessible across scopes, you must use it to your advantage and not cause issues.

### Local Scope

A local scope refers to any scope defined past the global scope. There is typically one global scope, and each function defined has its own (nested) local scope. Any function defined within another function has a local scope which is linked to the outer function.

If I define a function and create variables inside it, those variables becomes locally scoped. Take this example:

```javascript
// Scope A: Global Scope
var name = "Rien";
var age = 29;

var myFunction = function(){
    // Scope B: Local Scope
    // Everything defined here only exists in the local scope
    var name = "Evan";
    return name
}

console.log(name); // will return Rien
console.log(myFunction()) // will return Evan
```

### Function Scope

All scopes in JavaScript are created with _Function Scope only_, they aren’t created by for or while loops or expression statements like if or switch. New functions = new scope - that’s the rule. A simple example to demonstrate this scope creation:

```javascript
//Scope A: Global
var myFunction = function(){
    // Scope B: has access to variables in scope A
    var myOtherFunction = function(){
        // Scope C: has access to variables in scope A and B (see next topic)
    }
}
```

### Lexical Scope

Whenever you see a function within another function, the inner function has access to the scope in the outer function, this is called **Lexical Scope** or **Closure** - also referred to as Static Scope. The easiest way to demonstrate that again:

```javascript
//Scope A: Global
var myFunction = function(){
    // Scope B: has access to variables in scope A
    var name = "Rien";
    var myOtherFunction = function(){
        // Scope C: has access to name!

    }
}
```

The only important thing to remember is that Lexical scope does not work backwards. Here we can see how Lexical scope doesn’t work:

```javascript
// name = undefined
var scope1 = function () {
  // name = undefined
  var scope2 = function () {
    // name = undefined
    var scope3 = function () {
      var name = 'Rien'; // locally scoped
    };
  };
};
```

**This** keyword in JavaScript
----

Link to lecture: https://docs.google.com/presentation/d/1d9y6j6Djvji-Kj-EDB6XRamP7S_GdSFwyFMLmh99RlM/edit#slide=id.g1d1e49e639_0_5


External Resources
----
+ [Objects and "this"](http://javascript.info/object-methods#tasks). Make sure to try the tasks at the bottom as well.
+ [W3 Schools explaining Scope](https://www.w3schools.com/js/js_scope.asp)
+ [Understanding JS Scope](https://scotch.io/tutorials/understanding-scope-in-javascript)

<footer>
<h4>Sources</h4>
https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/
</footer>


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>