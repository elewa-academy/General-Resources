var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/MasterOfPuppets') 

require('./models/user')
require('./models/student')