var express = require("express");
var router = express.Router();
var data = require("../models/students");
var Student = require("../models/studentSchema");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("danger", "Please log in");
    res.redirect("/");
  }
}

// Read

router.get("/", isLoggedIn, (req, res) => {
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
router.get("/add", isLoggedIn, (req, res) => {
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
router.get("/profile/:id", isLoggedIn, (req, res) => {
  var id = req.params.id;
  Student.getStudentById(id)
    .then(student => {
      //console.log(student);
      res.render("profile", { message: null, student: student });
    })
    .catch(error => console.log(error));
  //res.json({ id: id, profile: data.getStudentById(id) });
  // res.render("profile", { message: null, student: data.getStudentById(id) });
});

router.post("/profile/:id", isLoggedIn, (req, res) => {
  var id = req.params.id;
  var obj = req.body;
  var message = "";
  Student.getStudentByIdAndUpdate(id, obj, (err, updatedStudent) => {
    if (err) {
      message = err;
    } else {
      message = "Student successfully modified";
      //console.log(updatedStudent);
    }
    res.redirect("/students");
  });
});

router.delete("/profile/:id", (req, res) => {
  var id = req.params.id;
  Student.deleteStudent(id, (err, deletedStudent) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      console.log(deletedStudent);
      res.json(deletedStudent);
    }
  });
});

module.exports = router;
