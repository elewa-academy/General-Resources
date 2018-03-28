// require everything
let model = require('../components/models/basic-mvclh-model-async');
let view = require('../components/views/basic-terminal-view');
let controller = require('../components/controllers/basic-mvclh-controller-async');
let logic = require('../components/logics/basic-mvclh-logic-async');
let handler = require('../components/handlers/basic-terminal-handler');

// build everything
controller.model = model;
controller.view = view;
controller.logic = logic;

handler.controller = controller;

// run the app
handler.add();

