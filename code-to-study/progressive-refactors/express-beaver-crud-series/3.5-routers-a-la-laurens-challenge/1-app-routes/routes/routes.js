function routesAdder(app) {
	app.get('/', function(req, res){
  		res.send('app-routes');
	});
};

module.exports = routesAdder;

