/*
First method
*/


const BeaversController = require('../controllers/beavers_controller')

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('index')
  })
  app.get('/beavers', BeaversController.viewAll)
  app.get('/beavers/add', BeaversController.viewAdd)

  app.post('/beavers', BeaversController.create)

}
