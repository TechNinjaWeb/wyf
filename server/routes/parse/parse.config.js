let server = require('./parse-server.config.json');
let dashboard = require('./parse-dashboard.config.json');

let localhostURL = `http://localhost:${process.env.PORT}`;
let productionURL = process.env.PRODUCTION_URL || "https://wyf-app.herokuapp.com";

let serverURL = null;
let endpoint = '/parse';
if (process.env.HOST !== 'localhost') serverURL = productionURL + endpoint;
else serverURL = localhostURL + endpoint;

// Set server url to dynamic port
server.serverURL = serverURL;
for (let app of dashboard.apps) { app.serverURL = serverURL; }

exports.server = server;
exports.dashboard = dashboard;