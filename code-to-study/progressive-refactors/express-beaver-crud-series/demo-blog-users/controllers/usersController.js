var express = require('express');
var router = express.Router();

var usersModel = require('../models/usersModel');


router.get('/', function(req, res){
	var allOfThem = usersModel.getAll();
  	// view call of your choice.  
});

router.get('/users', function(req, res) {
	var thisUser = usersModel.getObject(req.body.id)
	// send create page  
});

router.post('/users', function(req, res) {
	var newUser = {};
	// build newUser
	usersModel.addObject(newUser)
	// view call of your choice.  
});

router.get('/users/:id/', function(req, res) {
	var userToSend = usersModel.getObject(req.params.id);
	// send read page  
});

router.get('/users/:id/update', function(req, res) {
	var userToSend = usersModel.getObject(req.params.id);
	// send update page  
});

router.post('/users/:id/update', function(req, res) {
	var updatedUser = {};
	// build updatedUser
	usersModel.updateObject(req.params.id, updatedUser);
	// view call of your choice.  
});

router.get('/users/:id/delete', function(req, res) {
	var userToSend = usersModel.getObject(req.params.id);
	// send update page  
});

router.post('/users/:id/delete', function(req, res) {
	usersModel.deleteObject(req.params.id);
	// view call of your choice.  
});


module.exports = router;