// import all needed modules
// just use const for now, we'll cover why later
const express      = require('express');
const app         = express();


// this is a big one.  changing to restful routes and adding ejs

app.use((req, res, next) => {
    console.log('-------------- \'hi\' says the calculator ---------------');
    next();
});

const calcHandlers = require('./controllers/calcHandlers');
app.use(calcHandlers);

app.use('/:operation', (req, res, next) => {
  console.log('----------- left server from 404 ------------');
  var message = 'path \'' + req.originalUrl + '\' does not exist';
  var error = {'404': message};
  res.send(error);
});

app.listen(3000, () => {
    console.log('listening on 3000');
})


