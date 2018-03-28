// import all needed modules
// just use const for now, we'll cover why later
const express      = require('express');
const app         = express();

const operationModel = require('./models/operationModel');

app.use(function (req, res, next) {
    console.log('-------------- \'hi\' says the calculator ---------------');
	res.locals.result = {callbackMessage: '', value: 0000};
    next();
});

// a request will hit every middleware it matches
app.use('/add/:arg1/:arg2', function (req, res, next) {
   	res.locals.result.value = parseInt(req.params.arg1) + parseInt(req.params.arg2);
   	console.log('in addition');
	  next()
});

// see above comment.  if you access '/add/*', it will do math twice
app.use('/:operation/:arg1/:arg2', function (req, res, next) {
  console.log('in ' + req.params.operation);
	var a = parseInt(req.params.arg1);
	var b = parseInt(req.params.arg2);
	var callbackArray = operationModel.getOperation(req.params.operation);
  if (callbackArray[0] == 'success') {
    res.locals.result.value = callbackArray[1].operation(a, b);
    res.locals.result.callbackMessage = callbackArray[0];
  } else {
    res.locals.result.callbackMessage = callbackArray[0];
  };
	next();
});

app.use(function (req, res, next) {
    console.log('----------------------- leaving server --------------------------\n');
    res.send(res.locals.result);
});

app.listen(3000, function() {
    console.log('listening on 3000');
})

