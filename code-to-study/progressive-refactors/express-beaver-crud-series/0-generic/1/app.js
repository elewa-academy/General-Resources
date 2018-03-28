const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.set('view engine', 'ejs')
app.set('view cache', false)

const db = [{id:0, name:'a'}, {id:1, name:'b'}];
var nextID = 2;

app.get('/', function(req, res){
  res.render('index', {db: db});
});

app.listen(3000, function(err){
  if(err){
    console.log(err);
  }else {
    console.log('Server is running on Port: 3000');
  }
});