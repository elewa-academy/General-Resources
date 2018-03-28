/*
Second method : express.Router()
*/

const express = require('express')
const router = express.Router()
const BeaversController = require('../controllers/beavers_controller')

router.get('/', BeaversController.viewAll)
router.get('/add', BeaversController.viewAdd)

router.post('/', BeaversController.create)

module.exports = router
