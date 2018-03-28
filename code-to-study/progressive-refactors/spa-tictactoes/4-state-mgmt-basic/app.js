// set up each app on their correct server ports

var static_server = require('./config/static_server');
var static_app = require('./services/static_app');
static_server.use(static_app);

var data_server = require('./config/data_server');
var data_api = require('./services/data_api');
data_server.use(data_api);


