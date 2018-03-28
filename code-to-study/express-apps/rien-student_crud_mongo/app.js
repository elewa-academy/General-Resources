var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var database = require("./config/database");

var port = 3000;

// start the database
database.startDb();

// set up middleware
app.use(bodyParser.urlencoded({ extended: false }));

//set up static server
app.use(express.static("public"));
//set up our view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set up routes
var routes = require("./controllers/routes");
app.use("/students", routes);

app.get("/", (req, res) => {
  res.redirect("/students");
});

// set up error middleware
app.use(function(req, res) {
  res.statusCode = 404;
  res.end("Page doesn't exist");
});

// set up server
app.listen(port, () => {
  console.log("port listening on port " + port);
});
