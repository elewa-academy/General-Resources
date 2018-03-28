const express = require('express')
const router = express.Router()
const StudentsController = require('../controllers/students_controller')

/*
router.get('/', (req, res) => {
  // all of your logic goes here
  // retrieve all the beavers, and pass them to your ejs
})
*/
router.get('/', StudentsController.viewAllStudents)
router.get('/create', StudentsController.viewCreateStudent)
// router.get('/read/:id', StudentsController.viewStudent)
// router.get('/update/:id', StudentsController.viewUpdateStudent)


router.post('/', StudentsController.createStudent)
// router.post('/update/:id', StudentsController.updateStudent)
// router.post('/delete/:id', StudentsController.deleteStudent)

module.exports = router
