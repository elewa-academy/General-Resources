const express = require('express')
const router = express.Router()
const BeaverController = require('../controllers/beavers_controller')

router.get('/', BeaverController.viewAllBeavers)
router.get('/add', BeaverController.viewCreateBeaver)

router.post('/', BeaverController.createBeaver)

module.exports = router
