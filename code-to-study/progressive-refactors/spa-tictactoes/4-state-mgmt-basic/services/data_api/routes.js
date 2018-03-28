var express = require('express');
var router = express.Router();

var data = 'global state';

router.get('/get', (req, res) => {
    res.json({data: data})
});

router.post('/post/:newData', (req, res) => {
    data = req.params.newData;
    res.json({message: 'global state updated'});
});

router.use((req, res, next) => {
    res.json({404: 'no such route'})
});

module.exports = router;