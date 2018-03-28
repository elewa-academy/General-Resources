// import all needed modules
// just use const for now, we'll cover why later
const express      = require('express');
const app         = express();

// middlewares are anything of the form 'app.use' or 'app.set'.
// they are used for local app configuration and operations
// don't touch the 'res' object except for 'res.locals' (which doesn't get sent at the end of the cycle)

// not specifying a source route tells express to pass every request through here
app.use(function (req, res, next) {
    console.log('-------------- \'hi\' says the calculator ---------------');
    // check out the docs to see why res.locals.result needs to be an object https://expressjs.com/en/api.html#res.send
    res.locals.result = {value: 0000};
    next();
});

// specs for a middleware or handler
//   1: what's the app.type
//   2: what's the path
//   3: what happens to the response (or just 'next()' for middleware)
//   4: behavior
//   5: purpose

// type: app.use
// path: 'add/:arg1/:arg2'
// response: next()
// behavior: add to res.locals.result.value the result of adding arg1 and arg2
// purpose: so addition is possible

// res.locals.result is used to store variables. 
// it doesn't become part of the http response, its just for you in the server
app.use('/add/:arg1/:arg2', function (req, res, next) {
   	// req.params are by default strings
   	res.locals.result.value = parseInt(req.params.arg1) + parseInt(req.params.arg2);
   	console.log('in addition');
  	next()
});

app.use('/subtract/:arg1/:arg2', function (req, res, next) {
   	res.locals.result.value = parseInt(req.params.arg1) - parseInt(req.params.arg2);
   	console.log('in subtraction');
	next()
});

app.use('/multiply/:arg1/:arg2', function (req, res, next) {
   	res.locals.result.value = parseInt(req.params.arg1) * parseInt(req.params.arg2);
   	console.log('in multiplication');
	next()
});

app.use('/divide/:arg1/:arg2', function (req, res, next) {
   	res.locals.result.value = parseInt(req.params.arg1) / parseInt(req.params.arg2);
   	console.log('in division');
	next()
});

app.use(function (req, res, next) {
    console.log('----------------------- leaving server --------------------------\n');
    // res.send builds the http response and puts a value in the body
    // we're putting res.locals.result in the body
    // res.send is like a return statement, it quits the server
    // var result = res.locals.result;
    res.send(res.locals.result);
    // console.log('response is gone, client will never see this');
});

app.listen(3000, function() {
    console.log('listening on 3000');
})

