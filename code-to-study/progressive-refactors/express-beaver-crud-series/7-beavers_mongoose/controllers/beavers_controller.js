const Beaver = require('../models/Beaver')
const User = require('../models/User')

module.exports = {
  viewAllBeavers(req, res) {
    // retrieve all beavers from the database
    Beaver.find({}, (error, beavers) => {
      if (error) console.log(error)
      res.render('beavers', { beavers })
    })
  },
  viewCreateBeaver(req, res) {
    res.render('add')
  },
  createBeaver(req, res) {
    // save a beaver to the database
    Beaver.create(req.body, (error, record) => {
      if (error) res.send(error)
      res.redirect('/beavers')
    })
  }
}
