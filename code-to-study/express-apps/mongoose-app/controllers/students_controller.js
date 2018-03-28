const Student = require('../models/student')

const controller = {
  /*
  viewAllStudents: function(req, res) {

  }
  */
  viewAllStudents(req, res) {
    // display all students
    // first we need to retrieve all students from the database
    // second we need to pass all the students to our ejs file
  },
  viewCreateStudent(req, res) {
    res.render('create')
  },
  createStudent(req, res) {
    // retrieve the information from our form
    // save that information to the database
    Student.create({name: req.body.name, age: req.body.age}, (error, record) =>{
      if (error) {
        console.log(error)
      } else {
        res.redirect('/students')
      }
    })
  }
}

module.exports = controller
