// require everything
let cleancalc = require('../components/controllers/cleancalc');
let view = require('../components/views/basic-terminal-view');
let handler = require('../components/handlers/cleancalc-terminal-handler');

handler.controller = cleancalc;

let result =  handler.handle();

view.render(result);


