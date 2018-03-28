
module.exports = function(db) {
    Beaver = db.collection("beavers")
    return {
        all: function(data, cb) {
            Beaver.find().toArray((err, result) =>{
                if (err) return console.log(err)
                cb(result)
            })
        },

        findOne: function(data, cb) {
            Beaver.findOne({_id: ObjectID(data.id)}, (err, result) => {
                if (err) return console.log(err);
                cb(result)
            })
        },

        findBeaver: function(data, cb) {
            Beaver.findOne(data, (err, result) => {
                if (err) return console.log(err);
                cb({beaverId: result._id} )
            })
        },

        create: function(data, cb) {
            return Beaver.save(data, (err, result) =>{
                if (err) return console.log(err)
                cb({beaverId: result.ops[0]._id}) //make sure that the object was created before moving forward
            })
        },

        update: function(data, cb) {
            Beaver.findOneAndUpdate(
                {_id: ObjectID(data.id)},
                {$set:{
                    fullName: data.fullName,
                    email: data.email,
                    address: data.address
                    //, adming: true
                }},
                (err, result) => {
                    if (err) return res.send(err)
                    cb(result)
                }
            )
        },

        delete: function(data, cb) {
            Beaver.findOneAndDelete(
              {_id: ObjectID(data.id)},
              (err, result) => {
                if (err) return res.send(500, err)
                  cb(result)
              }
            )
        },

        find: function(data, cb){
            if (data.id){
                this.findOne(data, cb)
            }
            else {
                this.all(data, cb)
            }
        }
    }
}
