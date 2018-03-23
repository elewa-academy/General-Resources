function result_interpreter(test_results, test_cases) {
    var interpretation = [];
    for(var i = 0; i < test_results.length; i++) {
        if(test_results[i][0]) {
            interpretation.push('PASS: ' + test_cases[i].name);
        } else {
            interpretation.push('fail: ' + test_cases[i].name + '.  expected: ' + test_cases[i].expected + ', got: ' + test_results[i][1]);
        };
    };
    return interpretation;
};

module.exports = result_interpreter;