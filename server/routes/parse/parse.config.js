// Require the configuration files
const server = require('./parse-server.config.json');
const dashboard = require('./parse-dashboard.config.json');

// Set the production and localhost urls
const localhostURL = "http://localhost" + (process.env.PORT || 3000);
const productionURL = process.env.PRODUCTION_URL || "https://wyf-app.herokuapp.com";

// Local variables
var serverURL = null;
const endpoint = '/parse';

// Determine the serverURL to use for parse
// Should support checking the NODE_ENV=production variable in the future
if (process.env.HOST !== 'localhost') serverURL = productionURL + endpoint;
else serverURL = localhostURL + endpoint;

// Set server url to dynamic port
server.serverURL = serverURL;
for (var app in dashboard.apps) { app.serverURL = serverURL; }

// Export the server and dashboard applications
exports.server = server;
exports.dashboard = dashboard;
exports.serverURL = serverURL;