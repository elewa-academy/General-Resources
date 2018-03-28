var mongoose = require('mongoose');
require("./db.js")
require("./record.js")

// mongoose.connection.collections['records'].drop( function(err) {
//     console.log('collection dropped');
// });
//mongoose.model('records').find({}).remove().exec()
// mongoose.model('records').find({}).exec((err, recs) => {
//     console.log(recs)
// })
// mongoose.model('records').create({name: "1234"}, (err, res) => {
//     console.log(err, res)
// })


//mongoose.model('records').find({}).remove().exec()


mongoose.model('arrays').create({array: [1]}, (err, res) => {
    console.log(err, res)
})

mongoose.model('arrays').create({array: [1]}, (err, res) => {
    console.log(err, res)
})

mongoose.model('arrays').create({array: [12]}, (err, res) => {
    console.log(err, res)
})

mongoose.model('arrays').create({array: [12, 1]}, (err, res) => {
    console.log(err, res)
})

mongoose.model('arrays').find({}).exec((err, recs) => {
    console.log(recs)
})

