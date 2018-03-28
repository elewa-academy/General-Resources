var express = require("express");
var router = express.Router();
var data = require("../models/students");
var Student = require("../models/studentSchema");

// Read

router.get("/", (req, res) => {
  Student.getAll((err, students) => {
    if (err) {
      console.log(err);
    } else {
      res.render("home", { students: students });
    }
  });

  //res.send(studentsArray);
});

// CREATE
router.get("/add", (req, res) => {
  var message = "Please fill in the form";
  res.render("addStudent", { message: message });
});

router.post("/add", (req, res) => {
  var studentObj = req.body;
  var message = "";

  Student.addNewStudent(studentObj, err => {
    if (err) {
      console.log(err);
      message = err;
    } else {
      message = "Student successfully added";
    }
    res.render("addStudent", { message: message });
  });

  // data.addNewStudent(studentObj, err => {
  //   if (err) {
  //     message = err;
  //   } else {
  //     message = "Student successfully added";
  //   }
  //   res.render("addStudent", { message: message });
  // });
});

// Get one Student
router.get("/profile/:id", (req, res) => {
  var id = req.params.id;
  Student.getStudentById(id)
    .then(student => {
      console.log(student);
      res.render("profile", { message: null, student: student });
    })
    .catch(error => console.log(error));
  //res.json({ id: id, profile: data.getStudentById(id) });
  // res.render("profile", { message: null, student: data.getStudentById(id) });
});

router.post("/profile/:id", (req, res) => {
  var id = req.params.id;
  var obj = req.body;
  var message = "";
  Student.getStudentByIdAndUpdate(id, obj, (err, updatedStudent) => {
    if (err) {
      message = err;
    } else {
      message = "Student successfully modified";
      console.log(updatedStudent);
    }
    res.redirect("/");
  });
});

router.delete("/profile/:id", (req, res) => {
  var id = req.params.id;
  Student.deleteStudent(id, (err, deletedStudent) => {
    if (err) {
      res.json(err);
    } else {
      res.json(deletedStudent);
    }
  });
});

module.exports = router;
