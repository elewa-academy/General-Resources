const express  = require('express');
const router   = express.Router();

const operationModel = require('../models/operationModel');

function doMath(opName, a, b) {
  var callbackArray = operationModel.getOperation(opName);
  // if this confuses you, checkout the schema in the model
  var opToUse = callbackArray[1].operation;
  var message = callbackArray[0] + ': ' + opName + ' does exist';
  var result = opToUse(a, b);
  var sendee = {};
  sendee.message = message;
  sendee.result = result;
  return sendee;
};

router.get('/add/:arg1/:arg2', (req, res) => {
  console.log('in add');
  var a = parseInt(req.params.arg1);
  var b = parseInt(req.params.arg2);
  var sendee = doMath('add', a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

router.get('/subtract/:arg1/:arg2', (req, res) => {
  console.log('in subtract');
  var a = parseInt(req.params.arg1);
  var b = parseInt(req.params.arg2);
  var sendee = doMath('subtract', a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

router.get('/multiply/:arg1/:arg2', (req, res) => {
  console.log('in mulitply');
  var a = parseInt(req.params.arg1);
  var b = parseInt(req.params.arg2);
  var sendee = doMath('mulitply', a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

router.get('/divide/:arg1/:arg2', (req, res) => {
  console.log('in divide');
  var a = parseInt(req.params.arg1);
  var b = parseInt(req.params.arg2);
  var sendee = doMath('divide', a, b);
  console.log('----------------------- leaving server --------------------------\n');
  res.send(sendee);
});

module.exports = router;
