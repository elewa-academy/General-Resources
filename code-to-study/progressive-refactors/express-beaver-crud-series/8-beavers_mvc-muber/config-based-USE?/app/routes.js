const router  = require('express').Router();
const routes = ["static","users", "sessions", "quotes"];

module.exports = function(server){
    routes.map( function (ele){
        server.use(requireRoute(ele))
    })
}

