let server = require('./parse-server.config.json');
let dashboard = require('./parse-dashboard.config.json');

let localhostURL = `http://localhost:${process.env.PORT}/parse`;
let productionURL = process.env.HOST || "https://wyf-app.herokuapp.com";

let serverURL = null;
if (process.env.HOST !== 'localhost') serverURL = productionURL;
else serverURL = localhostURL;

// Set server url to dynamic port
server.serverURL = serverURL;
for (let app of dashboard.apps) { app.serverURL = serverURL; }

exports.server = server;
exports.dashboard = dashboard;