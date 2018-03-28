function devSide(err, result) {
  // code this
}

function adder(number1, number2, cb) {
  var result = 0000;
  var err = null;
  if (typeof number1 == "number" && typeof number2 == "number") {
    result = number1 + number2;
  } else {
    err = "arguments arent numbers";
  }
  cb(err, result);
}

adder(5, 4, devSide); // -> 9

adder("tim", 4, devSide); // -> arguments arent numbers
