const express        = require('express');
const path           = require('path');
const bodyParser     = require('body-parser')
const http           = require('http');
const logger         = require('morgan');
const passport       = require('./passport');
const expressSession = require('express-session')
const passRoutesTo   = appRequire('routes');

let app = express()
const serverTools = require("./server/tools")



//log html requests
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//server.use(cookieParser());
app.use( expressSession({
    secret: 'brown bananas',
    resave: false,           // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false // forces a new but not modified session to be saved
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', process.cwd()+'/app')
//pass routes to server
passRoutesTo(app);
require("./server/errors")(app)

var port = serverTools.normalizePort(process.env.PORT || '3000');
app.set('port', port);
app = http.createServer(app);
app.listen(port);
app

//app.on('error', serverTools.onError(app));
app.on('listening', serverTools.onListening(app));

module.exports = app;