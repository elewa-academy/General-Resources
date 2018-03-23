function test_suite(test, testee, cases) {
    var results = [];
    for(var test_case in cases) {
        results.push(test(testee, cases[test_case].args, cases[test_case].expected)); 
    };
    return results;
};

module.exports = test_suite;