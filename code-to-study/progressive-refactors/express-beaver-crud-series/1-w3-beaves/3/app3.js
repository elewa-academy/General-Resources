var express = require("express")
var app = express()

// Body parser for forms
var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


Beavers = [{id:0, name:"Julia"}, {id:1, name: "Sam"}, {id:2, name: "patty"}]
// Schema => ["id", "name"]

// step 1
app.get("/", function(req, res){
    res.send(Beavers)
})

// step 2
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

// step 3
app.get("/beavers/:id", function(req, res){
    var beaverId = req.params.id
    res.send(Beavers[beaverId]);
})


app.listen(3001, function() {
    console.log("litening in port 3001")
})




