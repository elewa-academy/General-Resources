let model = require('../../components/models/basic-mvclh-model');

console.log("-- testing model --");

let expected;
let actual;

// --- case 1 - default value
expected = 0;
actual = model.getLastResult();
console.log("expected: ", expected, ". Recieved: ", actual);

// --- case 2 - reset LastResult
model.setLastResult(9);
expected = 9;
actual = model.getLastResult();
console.log("expected: ", expected, ". Recieved: ", actual);

// how could you make this better?