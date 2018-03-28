var mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String
  },
  country: {
    type: String
  }
});

var Student = mongoose.model("Student", studentSchema);

Student.getAll = function(cb) {
  Student.find(cb);
};

Student.addNewStudent = function(studentObj, cb) {
  var newStudent = new Student(studentObj);
  //   newStudent.name = studentObj.name;
  //   newStudent.age = studentObj.age;
  //   newStudent.sex = studentObj.sex;
  //   newStudent.country = studentObj.country;
  console.log(newStudent);
  newStudent.save(cb);
};

Student.getStudentById = function(id) {
  return Student.findById(id);
};

Student.getStudentByIdAndUpdate = function(id, obj, cb) {
  Student.findByIdAndUpdate(id, obj, cb);
};

Student.deleteStudent = function(id, cb) {
  Student.findByIdAndRemove(id, cb);
};

module.exports = Student;
