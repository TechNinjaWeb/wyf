// Declare globals
const parse_config = require('./parse.config.js');
exports.config = parse_config;
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
// const LiveQuery = require('./parse-live-query.js')

// Declare api endpoint routing middleware
const api = new ParseServer(parse_config.server);
const dashboard = new ParseDashboard(parse_config.dashboard);

// Export Functions
exports.dashboard = dashboard;
exports.api = api;

/* 
	Define Express App's to export 
*/

// Express dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Express parse_server export
const parse_server = express();
parse_server.use(bodyParser.json());
parse_server.use(bodyParser.urlencoded({ extended: false }));
// Routing strategy
parse_server.use(api);
exports.parse_server = parse_server;

// Express parse_dashboard export
const parse_dashboard = express();
parse_dashboard.use(bodyParser.json());
parse_dashboard.use(bodyParser.urlencoded({ extended: false }));
// Routing strategy
parse_dashboard.use(dashboard);
exports.parse_dashboard = parse_dashboard;

// Start the Parse server & dashboard components
exports.Start = (ExpressServer)=>{
	// Declare Port vars
	let dp = parse_config.dashboard.port;
	let sp = parse_config.server.port;
	
	// Begin Listeners
	parse_server.listen(sp, () => console.log(`Parse Server running on localhost:${sp}`));
	parse_dashboard.listen(dp, () => console.log(`Parse Dashboard running on localhost:${dp}`));
	
	// This will enable the Live Query real-time server
	ParseServer.createLiveQueryServer(ExpressServer);
};