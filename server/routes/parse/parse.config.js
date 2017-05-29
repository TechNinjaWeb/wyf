let server = require('./parse-server.config.json');
let dashboard = require('./parse-dashboard.config.json');

let serverURL = `http://localhost:${process.env.PORT}/parse`;

// Set server url to dynamic port
dashboard.apps[0].serverURL = serverURL;
server.serverURL = serverURL;

exports.server = server;
exports.dashboard = dashboard;