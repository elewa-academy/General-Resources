var express = require('express');
var router = express.Router();

var postsModel = require('../models/postsModel');


router.get('/', function(req, res){
	var allOfThem = postsModel.getAll();
  	// view call of your choice.  
});

router.get('/posts', function(req, res) {
	var thisUser = postsModel.getObject(req.body.id)
	// send create page  
});

router.post('/posts', function(req, res) {
	var newUser = {};
	// build newUser
	postsModel.addObject(newUser)
	// view call of your choice.  
});

router.get('/posts/:id/', function(req, res) {
	var postToSend = postsModel.getObject(req.params.id);
	// send read page  
});

router.get('/posts/:id/update', function(req, res) {
	var postToSend = postsModel.getObject(req.params.id);
	// send update page  
});

router.post('/posts/:id/update', function(req, res) {
	var updatedUser = {};
	// build updatedUser
	postsModel.updateObject(req.params.id, updatedUser);
	// view call of your choice.  
});

router.get('/posts/:id/delete', function(req, res) {
	var postToSend = postsModel.getObject(req.params.id);
	// send update page  
});

router.post('/posts/:id/delete', function(req, res) {
	postsModel.deleteObject(req.params.id);
	// view call of your choice.  
});


module.exports = router;