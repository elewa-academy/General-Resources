const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('app');
});

app.listen(3000, function(err){
  if(err){
    console.log(err);
  }else {
    console.log('Server is running on Port: 3000');
  }
});