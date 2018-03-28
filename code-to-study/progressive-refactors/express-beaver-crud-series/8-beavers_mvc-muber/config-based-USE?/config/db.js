const mongoose      = require('mongoose');

// mongoose
// use 127.0.0.1 instead of local host to make mongo work when wifi is off
mongoose.Promise = global.Promise; // set mongo promises to global promise
mongoose.connect('mongodb://127.0.0.1/passport');



