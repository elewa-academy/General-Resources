var app = require('express')(),
    debug = require('debug')('server:api'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    MongoClient = require('mongodb').MongoClient,
    mongoUrl = 'mongodb://localhost:27017/expressdemo',
    _db;

// automatically parse posted JSON in the HTTP request body
// https://github.com/expressjs/body-parser#bodyparserjsonoptions
app.use(bodyParser.json());

MongoClient.connect(mongoUrl, function(err, db) {
  if (err) {
    debug(err);
  } else {
    debug('connected to mongo');
    _db = db;
    app.listen(port, function() {
      debug('listening for requests on localhost:%s', port);
    });
  }
});

app.get('/users', function(req, res) {
  var collection = _db.collection('data');
  collection.find({}).toArray(function(err, users) {
    if (err) {
      debug(err);
      res.status(500).end();
    } else {
      var result = { success: true, users: users };
      debug(result);
      res.send(result);
    }
  });
});


app.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var collection = _db.collection('data');

  collection.findOne({ name: name }, function(err, user) {
    if (err) {
      debug(err);
      res.status(500).end();
    } else {
      var result = user
          ? { success: true, user: user }
          : { success: false, reason: 'user not found: ' + name };

      debug(result);
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
      debug(err);
      res.status(500).end();
    } else {
      if (existingUser) {
        result = { success: false, reason: 'user already exists: ' + existingUser.name };
        debug(result);
        res.send(result);
      } else {
        collection.insert(user, function(err, users) {
          if (err) {
            debug(err);
            res.status(500).end();
          } else {
            result = { success: true, user: users[0] };
            debug(result);
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
      debug(err);
      res.status(500).end();
    } else {
      var result = numberOfRemovedDocs == 1
          ? { success: true, deleted: name }
          : { success: false, reason: 'user not found: ' + name };

      debug(result);
      res.send(result);
    }
  });
});

