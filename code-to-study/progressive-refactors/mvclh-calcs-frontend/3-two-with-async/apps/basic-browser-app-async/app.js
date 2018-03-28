// doesn't quite work.  fix it

let model = require('../../components/models/basic-mvclh-model-async');
let view = require('../../components/views/basic-browser-view');
let controller = require('../../components/controllers/basic-mvclh-controller-async');
let logic = require('../../components/logics/basic-mvclh-logic-async');
let handler = require('../../components/handlers/basic-browser-handler');

console.log(logic)

controller.model = model;
controller.view = view;
controller.logic = logic;
handler.controller = controller;

window.onload = function() {
    let addButton = document.getElementById("addButton");
    addButton.onclick = function() {
        handler.add();
    };
};