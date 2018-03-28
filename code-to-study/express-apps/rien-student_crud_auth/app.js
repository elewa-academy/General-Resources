var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var flash = require("connect-flash");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var path = require("path");
var database = require("./config/database");
var configPassport = require("./config/passport");

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

// Set up Express Sessions
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

// Express messages middleware
app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

// set up passport middleware
configPassport(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  console.log("currentUser: " + req.user);
  next();
});

// set up routes
var routes = require("./controllers/routes");
app.use("/students", routes);

var authRoutes = require("./controllers/authRoutes");
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.redirect("/auth");
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
