// import all needed modules
// just use const for now, we'll cover why later
const express      = require('express');
const app         = express();

app.use((req, res, next) => {
    console.log('-------------- \'hi\' says the calculator ---------------');
    next();
});

const calcHandlers = require('./controllers/calcHandlers');
app.use(calcHandlers);

app.use('/ops/:oopsy', (req, res, next) => {
  console.log('----------- left server from 404 ------------');
  var message = 'we dont support ' + req.params.oopsy + ' access to our objects store';
  var error = {'404': message};
  res.send(error);
});

const homeHandler = require('./controllers/homeHandler');
app.use(homeHandler);

app.use('/home', (req, res, next) => {
  console.log('----------- left server from 404 ------------');
  var message = 'sorry, no subirectories for home';
  var error = {'404': message};
  res.send(error);
});

app.listen(3000, () => {
    console.log('listening on 3000');
})


// changes are in the controllers and the model

