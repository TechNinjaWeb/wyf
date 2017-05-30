// Load the .env file into memory
const env = require('dotenv').config().parsed || {PORT: 3000};
// Require the configuration files
var server = require('./parse-server.config.json');
var dashboard = require('./parse-dashboard.config.json');

// Set the production and localhost urls
const localhostURL = "http://localhost" + env.PORT;
const productionURL = env.PRODUCTION_URL || "https://wyf-app.herokuapp.com";

// Local variables
var serverURL = null;
const endpoint = '/parse';

// Determine the serverURL to use for parse
// Should support checking the NODE_ENV=production variable in the future
if (env.HOST !== 'localhost') serverURL = productionURL + endpoint;
else serverURL = localhostURL + endpoint;

// Set server url to dynamic port
server.serverURL = serverURL;
for (var app in dashboard.apps) { app.serverURL = server.serverURL; }

console.log(["server.serverURL", server.serverURL], ["dashboard.apps[0].serverURL", dashboard.apps[0].serverURL]);

// Export the server and dashboard applications
exports.server = server;
exports.dashboard = dashboard;
exports.serverURL = serverURL;