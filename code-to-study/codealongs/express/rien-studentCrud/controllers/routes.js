var express = require("express");
var router = express.Router();
var data = require("../models/students");

// Read

router.get("/", (req, res) => {
  res.render("home", { students: data.getAll() });
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

  data.addNewStudent(studentObj, err => {
    if (err) {
      message = err;
    } else {
      message = "Student successfully added";
    }
    res.render("addStudent", { message: message });
  });
});

// Get one Student
router.get("/profile/:id", (req, res) => {
  var id = req.params.id;
  //res.json({ id: id, profile: data.getStudentById(id) });
  res.render("profile", { message: null, student: data.getStudentById(id) });
});

router.post("/profile/:id", (req, res) => {
  var id = req.params.id;
  var obj = req.body;
  var message = "";
  data.getStudentByIdAndUpdate(id, obj, (err, student) => {
    if (err) {
      message = err;
    } else {
      message = "Student successfully modified";
      console.log(student);
    }
    res.redirect("/");
  });
});

router.delete("/profile/:id", (req, res) => {
  var id = req.params.id;
  data.deleteStudent(id, message => {
    res.json(message);
  });
});

module.exports = router;
