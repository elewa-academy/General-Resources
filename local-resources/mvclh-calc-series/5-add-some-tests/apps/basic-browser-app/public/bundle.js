(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

// doesn't quite work.  fix it

var model = require('../../components/models/basic-mvclh-model.js');
var view = require('../../components/views/basic-browser-view.js');
var controller = require('../../components/controllers/basic-mvclh-controller.js');
var logic = require('../../components/logics/basic-mvclh-logic.js');
var handler = require('../../components/handlers/basic-browser-handler.js');

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

},{"../../components/controllers/basic-mvclh-controller.js":2,"../../components/handlers/basic-browser-handler.js":3,"../../components/logics/basic-mvclh-logic.js":4,"../../components/models/basic-mvclh-model.js":5,"../../components/views/basic-browser-view.js":6}],2:[function(require,module,exports){
"use strict";

module.exports = {
    model: {},
    view: {},
    logic: {},
    add: function add(a, b) {
        var lastResult = this.model.getLastResult();
        var result = this.logic.add(a, b, lastResult);
        this.model.setLastResult(result);
        this.view.render(result);
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
    add: function add(a, b, lastResult) {
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
        return result;
    }
};

},{}],5:[function(require,module,exports){
"use strict";

module.exports = {
    lastResult: 0,
    setLastResult: function setLastResult(new_last_result) {
        this.lastResult = new_last_result;
    },
    getLastResult: function getLastResult() {
        return this.lastResult;
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
