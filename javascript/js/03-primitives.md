Primitives and coercion
===

By now we might have claimed a couple of times that "everything in JS" is an object. That's not technically true... There are **six** datatypes which are not objects, and as such don't have methods. These are called **primitives**. 

These six are: 
+ string
+ number
+ boolean
+ undefined
+ null
+ symbol (ES6)

You might be thinking now: "Wait a minute, I use methods on strings all the time!!". And you most definitely did! This is the sneaky thing JS does: strings, numbers and booleans (and symbols, but yeah...) are readily _coerced_ into objects! For those primitives, there are also **Object wrappers**. The String, Number and Boolean object each have methods that you can use on your string, number or boolean primitives because of this litte thing called **object coercion**.

```javascript
typeof true; //"boolean"
typeof Boolean(true); //"boolean"
typeof new Boolean(true); //"object"
typeof (new Boolean(true)).valueOf(); //"boolean"
 
typeof "abc"; //"string"
typeof String("abc"); //"string"
typeof new String("abc"); //"object"
typeof (new String("abc")).valueOf(); //"string"
 
typeof 123; //"number"
typeof Number(123); //"number"
typeof new Number(123); //"object"
typeof (new Number(123)).valueOf(); //"number"
```

So what happens when I for example try to run `"myString".length`? myString is a string _primitive_, however when I try to access a property from the String object, the primitive is coerced into an object temporarily for me to be able to access the object's properties and methods. This only happens for the duration of the operation: the object wrapper is quickly forgotten once the operation has been executed.

So we know now that we can coerce a primitive into an object. But can we also do this the other way around? The answer, of course, is yes. Just look at the example below:

```javascript
//object coerced to primitive 
var Twelve = new Number(12); 
var fifteen = Twelve + 3; 
fifteen; //15
typeof fifteen; //"number" (primitive)
typeof Twelve; //"object"; (still object)
 
//another object coerced to primitive
new String("hippo") + "potamus"; //"hippopotamus" 
 
//object not coerced (because 'typeof' operator can work with objects)
typeof new String("hippo") + "potamus"; //"objectpotamus"
```

But booleans are a bit trickier...
----

Sadly booleans don't coerce that easily. 

```javascript
if (new Boolean(false)){
    alert("true??")
}
```

Does coercion allow me to add properties to primitives?
----

Short answer: no. Remember, primitives are **NOT** objects and thus have no properties or methods. When a primitive gets coerced into an object, this happens only temporarily and will be quickly forgotten by JS. 

Quick example:

```javascript
var primitive = "september";
primitive.vowels = 3;
 
primitive.vowels; //undefined;
``` 

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>