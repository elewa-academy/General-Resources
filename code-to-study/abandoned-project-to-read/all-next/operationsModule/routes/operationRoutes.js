var express = require('express');
var router = express.Router();

var operationControllers = require('./controllers/operationControllers');
var operationModel = require('./models/operationModel');

// create
router.post('/', operationControllers.createPost);

// read
router.get('/:id', operationControllers.readGet);

// update
router.post('/:id/update', operationControllers.createPost);

// delete
router.post('/:id/delete', operationControllers.deletePost);

module.exports = router;