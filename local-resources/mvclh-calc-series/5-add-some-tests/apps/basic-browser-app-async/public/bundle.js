(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

// doesn't quite work.  fix it

var model = require('../../components/models/basic-mvclh-model-async');
var view = require('../../components/views/basic-browser-view');
var controller = require('../../components/controllers/basic-mvclh-controller-async');
var logic = require('../../components/logics/basic-mvclh-logic-async');
var handler = require('../../components/handlers/basic-browser-handler');

console.log(logic);

controller.model = model;
controller.view = view;
controller.logic = logic;
handler.controller = controller;

window.onload = function () {
    var addButton = document.getElementById("addButton");
    addButton.onclick = function () {
        handler.add();
    };
};

},{"../../components/controllers/basic-mvclh-controller-async":2,"../../components/handlers/basic-browser-handler":3,"../../components/logics/basic-mvclh-logic-async":4,"../../components/models/basic-mvclh-model-async":5,"../../components/views/basic-browser-view":6}],2:[function(require,module,exports){
"use strict";

module.exports = { // each method has equivalent functionality, different style
    model: {},
    view: {},
    logic: {},
    add: function add(a, b) {
        var _this = this;

        this.model.getLastResult(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                _this.logic.add(a, b, result, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        _this.model.setLastResult(result, function (err, result) {
                            if (err) {
                                console.log(err);
                            } else {
                                _this.view.render(result);
                            };
                        });
                    };
                });
            };
        });
    },
    otherAdd: function otherAdd(a, b) {
        var _this2 = this;

        this.model.getLastResult(function (err, result) {
            if (!err) {
                _this2.logic.add(a, b, result, function (err, result) {
                    if (!err) {
                        _this2.model.setLastResult(result, function (err, result) {
                            if (!err) {
                                _this2.view.render(result);
                            } else {
                                console.log(err);
                            };
                        });
                    } else {
                        console.log(err);
                    };
                });
            } else {
                console.log(err);
            };
        });
    },
    otherOtherAdd: function otherOtherAdd(a, b) {
        var _this3 = this;

        this.model.getLastResult(cb1);
        var cb1 = function cb1(err, result) {
            if (err) {
                console.log(err);
            } else {
                _this3.logic.add(a, b, result, cb2);
            };
        };
        var cb2 = function cb2(err, result) {
            if (err) {
                console.log(err);
            } else {
                _this3.model.setLastResult(result, cb3);
            };
        };
        var cb3 = function cb3(err, result) {
            if (err) {
                console.log(err);
            } else {
                _this3.view.render(result);
            };
        };
    }
};

},{}],3:[function(require,module,exports){
"use strict";

module.exports = {
    controller: {},
    add: function add() {
        var a; // to tell the difference between no number and 0
        var pre_a = document.getElementById("number1").value;
        if (pre_a == '') {
            a = undefined; // try Number('') to see why I do this
        } else {
            a = Number(pre_a);
        };

        var b;
        var pre_b = document.getElementById("number2").value;
        if (pre_b == '') {
            b = undefined;
        } else {
            b = Number(pre_b);
        }

        this.controller.add(a, b);

        document.getElementById("number1").innerHTML = null;
        document.getElementById("number2").innerHTML = null;
    }
};

},{}],4:[function(require,module,exports){
"use strict";

module.exports = {
    add: function add(a, b, lastResult, cb) {
        var result = 0;
        if (a && b) {
            result = a + b;
        } else if (a) {
            result = a + lastResult;
        } else if (b) {
            result = b + lastResult;
        } else {
            result = lastResult;
        }
        cb(null, result);
    }
};

},{}],5:[function(require,module,exports){
"use strict";

module.exports = {
    lastResult: 0,
    getLastResult: function getLastResult(cb) {
        cb(null, this.lastResult);
    },
    setLastResult: function setLastResult(newLastResult, cb) {
        this.lastResult = newLastResult;
        cb(null, newLastResult);
    }
};

},{}],6:[function(require,module,exports){
"use strict";

module.exports = {
    render: function render(result) {
        document.getElementById("output").innerHTML = result;
    }
};

},{}]},{},[1]);
