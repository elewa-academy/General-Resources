const express  = require('express');
const router   = express.Router();
const operationModel = require('../models/operationModel');

// checkit.  these are now organized by CRUD
// the reason to use crud is to begin organizing your application around access to data rather than user functionalities
// creating,reading, updating, deleting.  the primary things you can do to data

// for now they're all get handlers, we'll change that later

// now we're checking if an operation exists in this function
// does this make sense?
// it doesn't.  it's confusing.  callbacks will make this simpler
function doMath(opName, a, b) {
  var callbackArray = operationModel.getOperation(opName);
  // if this confuses you, checkout the schema in the model
  var message = '';
  var sendee = {};
  var result;
  if(callbackArray[0] == 'success') {
    message = callbackArray[0] + ': ' + opName + ' does exist';
    var opToUse = callbackArray[1].operation;
    result = opToUse(a, b);
  } else {
    message = callbackArray[0];
    result = undefined; 
  };
  sendee.message = message;
  sendee.result = result;
  return sendee;
};


// Create
router.get('/ops/create/*', (req, res) => {
  // clever code here
  var message = req.originalUrl + ' is under construction';
  res.send(message);
});

// Read
// right now we read out and use the data at the same time
// this'll change in the next version
router.get('/ops/read/:operation/:arg1/:arg2', (req, res) => {
  console.log('in readOp');
  var a = parseInt(req.params.arg1);
  var b = parseInt(req.params.arg2);
  var operation = req.params.operation;
  var sendee = doMath(operation, a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

// Update
router.get('/ops/update/*', (req, res) => {
  // do something with model.updateOperation
  var message = req.originalUrl + ' is under construction';
  res.send(message);
});

// Delete
router.get('/ops/delete/*', (req, res) => {
  // do something with model.updateOperation
  var message = req.originalUrl + ' is under construction';
  res.send(message);
});


module.exports = router;
