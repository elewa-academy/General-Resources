const express      = require('express');
const app         = express();

var message = '';

//arguments can be passed in using 'params'

app.use(function (req, res, next) {
    message = 'entered server.  ';
    console.log('in /');
    next();
});

app.use('/banana/:id', function (req, res, next) {
    message += 'banana number ';
    message += req.params.id;
    console.log('in \/tim');
    next()
});

app.use('/apple/:id', function (req, res, next) {
    message += 'apple number ';
    message += req.params.id;
    next()
});

app.get('/*', function (req, res, next) {
    console.log('in get');
    message += '. sending response.'
    res.send(message)
});

app.listen(3000, function() {
    console.log('listening on 3000');
})

