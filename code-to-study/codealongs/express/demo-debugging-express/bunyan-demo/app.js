var app = require('express')(),
    bodyParser = require('body-parser'),
    bunyan = require('bunyan'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    MongoClient = require('mongodb').MongoClient,
    mongoUrl = 'mongodb://localhost:27017/expressdemo',
    _db;

// simplest logger - just logs to console
// var log = bunyan.createLogger({name: 'bunyan-demo'});

// see: https://github.com/trentm/node-bunyan
var log = bunyan.createLogger({
  name: 'bunyan-demo',
  streams: [
    {
      level: 'trace',
      stream: process.stdout
    },
    {
      level: 'warn',
      path: './bunyan-demo.log'
    }
  ]
});

// automatic request logging
// for configuration options, see:  https://github.com/expressjs/morgan
app.use(morgan('dev'));

// automatically parse posted JSON in the HTTP request body
// https://github.com/expressjs/body-parser#bodyparserjsonoptions
app.use(bodyParser.json());

MongoClient.connect(mongoUrl, function(err, db) {
  if (err) {
    log.fatal(err);
  } else {
    log.info('connected to mongo');
    _db = db;
    app.listen(port, function() {
      log.info('listening for requests on localhost:%s', port);
    });
  }
});

app.get('/users', function(req, res) {
  _db.collection('data', function(err, collection) {
    if (err) {
      log.error(err);
      return res.status(500).end();
    }

    collection.find({}).toArray(function (err, users) {
      if (err) {
        log.error(err);
        res.status(500).end();
      } else {
        var result = { success: true, users: users };
        log.info(result);
        res.send(result);
      }
    });
  });
});


app.get('/users/:name', function(req, res) {
  var name = req.params.name;

  _db.collection('data', function(err, collection) {
    if (err) {
      log.error(err);
      return res.status(500).end();
    }

    collection.findOne({ name: name }, function (err, user) {
      if (err) {
        log.error(err);
        res.status(500).end();
      } else {
        var result = user
            ? { success: true, user: user }
            : { success: false, reason: 'user not found: ' + name };

        log.info(result);
        res.send(result);
      }
    });
  });
});


app.post('/users', function(req, res) {
  var user = req.body;
  var result;

  _db.collection('data', function(err, collection) {
    if (err) {
      log.error(err);
      return res.status(500).end();
    }

    collection.findOne({ name: user.name }, function (err, existingUser) {
      if (err) {
        log.error(err);
        res.status(500).end();
      } else {
        if (existingUser) {
          result = { success: false, reason: 'user already exists: ' + existingUser.name };
          log.info(result);
          res.send(result);
        } else {
          collection.insert(user, function (err, users) {
            if (err) {
              log.error(err);
              res.status(500).end();
            } else {
              result = { success: true, user: users[0] };
              log.info(result);
              res.send(result);
            }
          });
        }
      }
    });
  });

});


app.delete('/users/:name', function(req, res) {
  var name = req.params.name;

  _db.collection('data', function(err, collection) {
    if (err) {
      log.error(err);
      return res.status(500).end();
    }

    collection.remove({ name: name }, { w: 1 }, function (err, numberOfRemovedDocs) {
      if (err) {
        log.error(err);
        res.status(500).end();
      } else {
        var result = numberOfRemovedDocs == 1
            ? { success: true, deleted: name }
            : { success: false, reason: 'user not found: ' + name };

        log.info(result);
        res.send(result);
      }
    });
  });
});

