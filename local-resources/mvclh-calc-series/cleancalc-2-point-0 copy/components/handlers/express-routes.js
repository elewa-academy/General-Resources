var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
   res.locals.controller.home()
});

// add numbers
router.get("/add/:num1/:num2", function(req, res){
	var n1 = parseFloat(req.params.num1); // parseFloat can parse a string with a decimal into a number
	var n2 = parseFloat(req.params.num2); // using here instead of parseInt which is only for whole numbers
	res.locals.controller.add(n1, n2);
});

// subtract numbers
router.get("/sub/:num1/:num2", function(req, res){
	var n1 = parseFloat(req.params.num1); // parseFloat can parse a string with a decimal into a number
	var n2 = parseFloat(req.params.num2); // using here instead of parseInt which is only for whole numbers
	res.locals.controller.subtract(n1, n2);
});

// multiply numbers
router.get("/mult/:num1/:num2", function(req, res){
	var n1 = parseFloat(req.params.num1);
	var n2 = parseFloat(req.params.num2); 
	res.locals.controller.multiply(n1, n2);
});

// divide numbers
router.get("/div/:num1/:num2", function(req, res){
	var n1 = parseFloat(req.params.num1); 
	var n2 = parseFloat(req.params.num2); 
	res.locals.controller.divide(n1, n2);
});

module.exports = router;