// Step 1: require module(s)
var express = require("express");
var app = express(); // likewise: var app = require("express")();

// Step 2: create some middleware
app.use(function(req, res, next) {
  res.send("Hello World");
  next();
});

// Step 3: create and start server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
