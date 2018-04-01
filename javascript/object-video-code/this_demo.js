var obj = {
  object: {
    obj2: 'This is a string'
  }
};
//=========================================
var nestedObjFunction = {
  object: {
    obj2: function() {
      console.log('This is a string again');
    }
  }
};
//=============================================
function hello() {
  console.log('Hello');
}

hello.goodbye = function() {
  console.log('goodbye');
};
hello.object = {
  string: 'String test'
};

hello.goodbye();

//=====================================================
var id = 10;
var objUsingThis = {
  id: null,

  add: function() {
    this.id++;
    id++;
    console.log(objUsingThis.id);
    console.log(id);
  }
};

