// import all needed modules
// just use const for now, we'll cover why later
const express      = require('express');
const app         = express();

const operationModel = require('./models/operationModel');

/*
  welcome to handlers.
  up till now, you've only seen middleware (app.use, app.set).
  now you'll see your first handler.  
  handlers look like 'app.get' or '.put' or '.all'.  anything but use or set
  for this exercise, the handler is in app.js. 
  after this exercise you will always write them in a separate file in the 'controllers' directory

  the important thing to learn from this example is that once a handler is entered, no middleware is executed ever again
  this provides us with a simple way to send error reports to the browser
*/

// check out this locally defined helper function.  
// 'res.locals' is a socially acceptable global scope variable
function doMath(opName, a, b) {
  var callbackArray = operationModel.getOperation(opName);
  // if this confuses you try these 3 things
  //  1: check the return value of operationModel.getOperation
  //  2: check the schema in operationModel
  //  3: console.log(callbackArray);
  var opToUse = callbackArray[1].operation;
  var message = callbackArray[0] + ': ' + opName + ' does exist';
  var result = opToUse(a, b);
  var sendee = {};
  sendee.message = message;
  sendee.result = result;
  return sendee;
}


app.use((req, res, next) => {
    console.log('-------------- \'hi\' says the calculator ---------------');
    next();
});

app.get('/add/:arg1/:arg2', (req, res) => {
  console.log('in add');
	var a = parseInt(req.params.arg1);
	var b = parseInt(req.params.arg2);
  var sendee = doMath('add', a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

app.get('/subtract/:arg1/:arg2', (req, res) => {
  console.log('in subtract');
  var a = parseInt(req.params.arg1);
  var b = parseInt(req.params.arg2);
  var sendee = doMath('subtract', a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

app.get('/multiply/:arg1/:arg2', (req, res) => {
  console.log('in mulitply');
  var a = parseInt(req.params.arg1);
  var b = parseInt(req.params.arg2);
  var sendee = doMath('mulitply', a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

app.get('/divide/:arg1/:arg2', (req, res) => {
  console.log('in divide');
  var a = parseInt(req.params.arg1);
  var b = parseInt(req.params.arg2);
  var sendee = doMath('divide', a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

app.use('/:operation', (req, res, next) => {
  var message = 'path \'' + req.params.operation + '\' does not exist';
  var error = {'404': message};
  res.send(error);
});

app.use((req, res, next) => {
  var message = 'no home directory';
  var error = {'404': message};
  res.send(error);
});


app.listen(3000, () => {
    console.log('listening on 3000');
})

