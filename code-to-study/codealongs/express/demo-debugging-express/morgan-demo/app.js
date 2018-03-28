var app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    MongoClient = require('mongodb').MongoClient,
    mongoUrl = 'mongodb://localhost:27017/expressdemo',
    _db;

// automatic request logging
// for configuration options, see:  https://github.com/expressjs/morgan
app.use(morgan('dev'));

// automatically parse posted JSON in the HTTP request body
// https://github.com/expressjs/body-parser#bodyparserjsonoptions
app.use(bodyParser.json());

MongoClient.connect(mongoUrl, function(err, db) {
  if (err) {
    console.error(err);
  } else {
    console.log('connected to mongo');
    _db = db;
    app.listen(port, function() {
      console.log('listening for requests on localhost:%s', port);
    });
  }
});

app.get('/users', function(req, res) {
  var collection = _db.collection('data');
  collection.find({}).toArray(function(err, users) {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      var result = { success: true, users: users };
      console.log(result);
      res.send(result);
    }
  });
});


app.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var collection = _db.collection('data');

  collection.findOne({ name: name }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      var result = user
          ? { success: true, user: user }
          : { success: false, reason: 'user not found: ' + name };

      console.log(result);
      res.send(result);
    }
  });
});


app.post('/users', function(req, res) {
  var user = req.body;
  var collection = _db.collection('data');
  var result;

  collection.findOne({ name: user.name }, function(err, existingUser) {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      if (existingUser) {
        result = { success: false, reason: 'user already exists: ' + existingUser.name };
        console.log(result);
        res.send(result);
      } else {
        collection.insert(user, function(err, users) {
          if (err) {
            console.error(err);
            res.status(500).end();
          } else {
            result = { success: true, user: users[0] };
            console.log(result);
            res.send(result);
          }
        });
      }
    }
  });

});


app.delete('/users/:name', function(req, res) {
  var name = req.params.name;
  var collection = _db.collection('data');

  collection.remove({ name: name }, {w:1}, function(err, numberOfRemovedDocs) {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      var result = numberOfRemovedDocs == 1
          ? { success: true, deleted: name }
          : { success: false, reason: 'user not found: ' + name };

      console.log(result);
      res.send(result);
    }
  });
});

