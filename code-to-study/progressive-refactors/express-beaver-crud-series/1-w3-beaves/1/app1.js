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



app.listen(3001, function() {
    console.log("litening in port 3001")
})




