const Mongo       = require('mongodb')
const ObjectID    = Mongo.ObjectID

module.exports = function(db) {
    Session = db.collection("sessions")
    return {
        create: function(data, cb) {
            return Session.save(data, (err, result) =>{
                if (err) return console.log(err)
                cb(result.ops[0]._id) //make sure that the object was created before moving forward
            })
        },
        find: function(data, cb) {
            Session.findOne({_id: ObjectID(data.id)}, (err, result) => {
                if (err) return console.log(err);
                cb(result)
            })
        },
        delete: function(data, cb) {
            Session.findOneAndDelete(
              {_id: ObjectID(data.id)},
              (err, result) => {
                if (err) return res.send(500, err)
                if (cb) cb(result)
              }
            )
        }
    }
}
