// no need to assign this to a variable
// by requiring it, you run the code in the file
// when the code runs, the envs are set
require('./envs/prod');

var app = require('./app');

app.listen(process.env.port, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log('running ', process.env.mode, ' code on  port ', process.env.port);
	};
});