const beavers = require('../models/beavers')

let idCounter = 0

module.exports = {

  /*
  ES6 syntax,
  same as:

  viewAll: function(req, res) {
  }

  */
  viewAll(req, res) {
    res.render('beavers', { beavers })
  },
  viewAdd(req, res) {
    res.render('add')
  },
  create(req, res) {
    const beaver = req.body
    beaver.id = idCounter
    idCounter++
    beavers.push(beaver)
    res.redirect('/beavers')
  }
  

}
