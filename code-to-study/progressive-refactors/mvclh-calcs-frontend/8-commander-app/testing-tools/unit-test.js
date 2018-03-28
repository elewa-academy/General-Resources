function unit_test(testee, args, expected) {
    var result = testee(...args);
    return [result == expected, result];
};

module.exports = unit_test;