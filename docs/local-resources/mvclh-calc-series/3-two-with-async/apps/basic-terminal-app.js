// require everything
let model = require('../components/models/basic-mvclh-model');
let view = require('../components/views/basic-terminal-view');
let controller = require('../components/controllers/basic-mvclh-controller');
let logic = require('../components/logics/basic-mvclh-logic');
let handler = require('../components/handlers/basic-terminal-handler');

// build everything
controller.model = model;
controller.view = view;
controller.logic = logic;

handler.controller = controller;

// run the app
handler.add();

