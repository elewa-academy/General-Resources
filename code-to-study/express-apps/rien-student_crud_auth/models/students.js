var eliumStudents = {
  name: "eliumStudents",
  students: {
    0: {
      id: 0,
      name: "Sanni",
      age: 31,
      sex: "female",
      country: "Liberia"
    }
  },
  currentId: 0,
  getAll: function() {
    var studentsArray = [];
    for (var id in this.students) {
      studentsArray.push(this.students[id]);
    }
    return studentsArray;
  },
  validatedata: function(studentObj, cb) {
    var err;
    if (
      typeof studentObj.name === "string" &&
      !isNaN(studentObj.age) &&
      typeof studentObj.sex === "string" &&
      typeof studentObj.country === "string"
    ) {
      if (studentObj.name && Number(studentObj.age)) {
        err = null;
      } else {
        err = "Please enter age and name";
      }
    } else {
      err = "Invalid entries";
    }
    cb(err);
  },
  addNewStudent(studentObj, cb) {
    this.validatedata(studentObj, err => {
      if (!err) {
        this.currentId++;
        this.students[this.currentId] = studentObj;
        this.students[this.currentId].id = this.currentId;
      }
      cb(err);
    });
  },
  getStudentById: function(id) {
    return this.students[id];
  },
  getStudentByIdAndUpdate: function(id, new_obj, cb) {
    this.validatedata(new_obj, err => {
      if (!err) {
        this.students[id] = new_obj;
        this.students[id].id = id;
      }
      cb(err, new_obj);
    });
  },
  deleteStudent: function(id, cb) {
    var message;
    if (this.students[id]) {
      message = `${this.students[id].name} deleted`;
      delete this.students[id];
    } else {
      message = "Student doesn't exist";
    }
    cb(message);
  }
};

module.exports = eliumStudents;
