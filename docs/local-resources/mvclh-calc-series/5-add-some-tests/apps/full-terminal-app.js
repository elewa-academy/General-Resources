// require everything
let model = require('../components/models/basic-mvclh-model');
let view = require('../components/views/basic-terminal-view');
let controller = require('../components/controllers/full-mvclh-controller');
let logic = require('../components/logics/full-mvclh-logic');
let handler = require('../components/handlers/full-terminal-handler');

// build everything
controller.model = model;
controller.view = view;
controller.logic = logic;

handler.controller = controller;

// run the app
handler.handle();

