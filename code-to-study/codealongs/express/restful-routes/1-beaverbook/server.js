var express = require("express")
var app = express()

// Body parser for forms
var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// routes =>
/* ------------------- INDEX -------------------*/
// GET  "/"                     => show all beaver

/* ------------------- CREATE -------------------*/
// GET  "/beaver"                => Create new Beaver
// POST "/beaver"                => Create new Beaver
//                                 Redirect to "/beaver/:id"

/* ------------------- READ -------------------*/
// GET  "/beaver/:id"             => View Beaver Info with id ...

/* ------------------- UPDATE -------------------*/
// GET  "/beaver/:id/update"     => update Beaver with id...
// POST "/beaver/:id/update"     => update Beaver with id...
//                                 Redirect to "/beaver/:id"

/* ------------------- DELETE -------------------*/
// GET  "/beaver/:id/delete"     => delete Beaver with id...
// POST "/beaver/:id/delete"     => delete Beaver with id...
//                                 Redirect to "/"

Beavers = [{id:0, name:"Julia"}, {id:1, name: "Sam"}, {id:2, name: "patty"}]
// Schema => ["id", "name"]


app.get("/", function(req, res){
    res.send(Beavers)
})

app.get("/beavers", function(req, res){
    res.send('put a new beaver name in the body and submit')
})

app.post("/beavers", function(req, res){
    var newId = Beavers.length;
    var newName = req.body.name;
    var newBeaver = {id: newId, name: newName};
    Beavers.push(newBeaver);
    res.redirect("/beavers/" + id)
})

app.get("/beavers/:id", function(req, res){
    var beaverId = req.params.id
    res.send(Beavers[beaverId]);
})

app.get("/beavers/:id/update", function(req, res){
    var beaverId = req.params.id
    res.send({beaver: Beavers[beaverId], message: 'modify this beaver in the body'});
})

app.post("/beavers/:id/update", function(req, res){
    var beaverId = req.params.id
    Beavers[beaverId].name = req.body.name
    res.redirect("/beavers/" + beaverId)
})

app.get("/beavers/:id/delete", function(req, res){
    var beaverId = req.params.id
    res.send({id: beaverId, message: 'confirm deleting this beaver'});
})

app.post("/beavers/:id/delete", function(req, res){
    // write the code to delete the selected beaver
    res.redirect("/")
})

app.listen(3001, function() {
    console.log("litening in port 3001")
})




