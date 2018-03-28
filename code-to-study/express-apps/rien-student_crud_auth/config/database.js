var mongoose = require("mongoose");
var keys = require("./keys");

module.exports = {
  database: `mongodb://${keys.username}:${keys.password}@ds121575.mlab.com:21575/${keys.dbname}`,
  startDb: function() {
    mongoose.Promise = global.Promise; // get rid of annoying warning
    mongoose.connect(this.database, { useMongoClient: true });
    db = mongoose.connection;

    db.once("open", () => {
      console.log("Connected to Mongo DB");
    });
    db.on("error", error => {
      console.log(error);
    });
  }
};
