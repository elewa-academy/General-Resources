var app = require('./app');

app.listen(3000, function(err){
  if(err){
    console.log(err);
  }else {
    console.log('Server is running on Port: 3000');
  }
});