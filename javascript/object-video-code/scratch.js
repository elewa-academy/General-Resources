//===================================
// Lesson about objects
//==================================

//These work
obj.object.obj2
obj['object'].obj2
obj.object['obj2']
obj['object']['obj2']

//These do not work
['obj']['object']['obj2']
[obj][object][obj2]
obj[object][obj2]
obj.[object][obj2]
obj['object'][obj2]
obj.object[obj2]


//==================================
// Nested Object with a function 
//==================================

//These work
nestedObjFunction.object.obj2();
nestedObjFunction['object'].obj2();
nestedObjFunction['object']['obj2']();
nestedObjFunction.object['obj2']();

//These do not work
nestedObjFunction.object.['obj2']();
nestedObjFunction.object.[obj2]();
nestedObjFunction.object[obj2]();


//================================
// Using functions  as an Object
//================================
function hello() {
    console.log('Hello');
  }
  
  hello.id = console.log(0);
  hello.goodbye = function() {
    console.log('goodbye');
  };
  hello.object= {
      string: "String test"
  }
  hello();
  hello.goodbye();



//===============================
// lesson about "this" 
//
//================================


/*================================
      "this" use with objects      
===================================*/
//does work
this.id++;
this['id']++;

//does not work
this[id]++;