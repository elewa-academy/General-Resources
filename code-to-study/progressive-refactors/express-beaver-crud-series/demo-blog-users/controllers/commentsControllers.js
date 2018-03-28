var express = require('express');
var router = express.Router();

var commentsModel = require('../models/commentsModel');


router.get('/', function(req, res){
	var allOfThem = commentsModel.getAll();
  	// view call of your choice.  
});

router.get('/comments', function(req, res) {
	var thisUser = commentsModel.getObject(req.body.id)
	// send create page  
});

router.post('/comments', function(req, res) {
	var newUser = {};
	// build newUser
	commentsModel.addObject(newUser)
	// view call of your choice.  
});

router.get('/comments/:id/', function(req, res) {
	var commentToSend = commentsModel.getObject(req.params.id);
	// send read page  
});

router.get('/comments/:id/update', function(req, res) {
	var commentToSend = commentsModel.getObject(req.params.id);
	// send update page  
});

router.post('/comments/:id/update', function(req, res) {
	var updatedUser = {};
	// build updatedUser
	commentsModel.updateObject(req.params.id, updatedUser);
	// view call of your choice.  
});

router.get('/comments/:id/delete', function(req, res) {
	var commentToSend = commentsModel.getObject(req.params.id);
	// send update page  
});

router.post('/comments/:id/delete', function(req, res) {
	commentsModel.deleteObject(req.params.id);
	// view call of your choice.  
});


module.exports = router;