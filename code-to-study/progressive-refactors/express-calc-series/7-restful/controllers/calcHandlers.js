const express  = require('express');
const router   = express.Router();
const operationModel = require('../models/operationModel');



// routes =>
/* ------------------- INDEX -------------------*/
// GET  "/"                     => show all operations

/* ------------------- CREATE -------------------*/
// GET  "/operations"                => Create new Operation
// POST "/operations"                => Create new Operation
//                                 Redirect to "/operation/:id"

/* ------------------- READ -------------------*/
// GET  "/operations/:id"             => View Operation Info with id ...

/* ------------------- UPDATE -------------------*/
// GET  "/operations/:id/update"     => update Operation with id...
// POST "/operations/:id/update"     => update Operation with id...
//                                 Redirect to "/operation/:id"

/* ------------------- DELETE -------------------*/
// GET  "/operations/:id/delete"     => delete Operation with id...
// POST "/operations/:id/delete"     => delete Operation with id...
//                                 Redirect to "/"

app.get("/", function(req, res){
    var opsArray = operationModel.getAll()
    res.send(opsArray);
});

app.get("/operations", function(req, res){
    res.send('create get is under construction');
});

app.post("/operations", function(req, res){
    res.send('create post is under construction');
})

app.get("/operations/:id", function(req, res){
    var operationId = req.params.id
    res.send(Operations[operationId]);
})

app.get("/operations/:id/update", function(req, res){
    res.send
})

app.post("/operations/:id/update", function(req, res){
    var operationId = req.params.id
    Operations[operationId].name = req.body.name
    res.redirect("/operations/" + operationId)
})

app.get("/operations/:id/delete", function(req, res){
    var operationId = req.params.id
    res.send({id: operationId, message: 'confirm deleting this operation'});
})

app.post("/operations/:id/delete", function(req, res){
    // write the code to delete the selected operation
    res.redirect("/")
})


module.exports = router;
