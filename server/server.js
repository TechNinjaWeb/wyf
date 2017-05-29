// Load the .env file into memory app-wide
require('dotenv').config();
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const app = express();
const parse_app = require('./routes/parse');
// Config
const port = process.env.PORT || '3000';
const server = http.createServer(app);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Set App Engine and Distribution Directories
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("view options", {layout: false});
app.set('views', path.join(__dirname, '../dist'));
app.use(express.static(path.resolve(__dirname, '../dist')));
// Enable trust proxy (heroku fix)
app.enable('trust proxy');
// Begin Routing
app.use('/', api);
// Get port from environment and store in Express.
app.set('port', port);

/**
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`App running on localhost:${port}`));
parse_app.Start(server);   // Start Parse Server & Dashboard