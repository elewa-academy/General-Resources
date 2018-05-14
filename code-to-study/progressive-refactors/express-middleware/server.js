const express      = require('express');
const app         = express();

var id = 0000; 

app.use('/*/:id', function (req, res, next) {
    console.log(req.params.id, req.params.id>0)
    if(req.params.id>0){
        id = req.params.id
    } else {
        id = 0
    }
    next()
});

app.use('/bananas/:id', function (req, res, next) {
    res.send('you are seeing a banana with id=' + id)
});

app.use('/apples/:id', function (req, res, next) {
    res.send('you are seeing an apple with id=' + id)
});

app.listen(3000, function() {
    console.log('listening on 3000');
})

