// require things
var express 	= require('express');
var app 		= express();
var path 		= require('path');

var port        = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/ejs', function(req, res){
	res.render('boardbuilder', {inserter: '*'});
});

app.get('/html', function(req, res) {
	res.sendFile(path.join.__dirname('views/jsToEjs.html'));
})

app.listen(port, function(){
	console.log("Server is up on port: " + port)
});