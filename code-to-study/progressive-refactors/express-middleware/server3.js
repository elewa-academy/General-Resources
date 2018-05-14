const express      = require('express');
const app         = express();

var message = '';

app.use(function (req, res, next) {
    message = 'entered server.  ';
    console.log('-------------- in / ---------------');
});

// let's tidy this up a bit

app.use('/:fruit', function (req, res, next) {
    console.log(req.params.fruit)
    if(req.params.fruit == 'banana') {
        message += ' banana';
    } else if (req.params.fruit == 'apple') {
        message += ' apple';
    } else {
        message += ' unknown fruit';
    };
    console.log('in \/:fruit');
    next()
});

app.use('/*/:id', function (req, res, next) {
    // params are by default strings
    message += ' ' + parseInt(req.params.id);
    console.log('in \/\*\/:id');
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

