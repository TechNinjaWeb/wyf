////////////////////////////////////////////////////////////////////////////////////////
//																					  //
//	Filename: 		index.ts														  //
//	Author: 		Tech Ninja <4umninja@gmail.com>									  //
//	Date: 			May 21, 2017													  //
//	Description: 	Start point for this nodejs server applet						  //
//	Credits: 		1. https://www.youtube.com/watch?v=lncsmB5yfzE					  //
//																					  //
////////////////////////////////////////////////////////////////////////////////////////
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get dependencies
var express = require("express");
var path = require("path");
var http = require("http");
var bodyParser = require("body-parser");
// Dependencies for angular as credited by #1
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var fs_1 = require("fs");
// Angular module factory dependency gets created upon 'ng build'
var app_server_module_ngfactory_1 = require("../dist/ngfactory/src/app/app-server.module.ngfactory");
// Config
var port = process.env.PORT || '3000';
var app = express();
var server = http.createServer(app);
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));
// SEO Template body: Angular 2+ Fix
var template = fs_1.readFileSync(path.join(__dirname, 'dist', '..', 'index.html')).toString();
// Set App Engine and Distribution Directories
app.engine('html', function (_, options, callback) {
    // Define the options that the renderModuleFactory will use 
    var opts = { document: template, url: options.req.url };
    // Load the angular module then execute the engine's callback 
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../dist'));
app.use(express.static(path.resolve(__dirname, '../dist')));
// Enable trust proxy (heroku fix)
app.enable('trust proxy');
// Get port from environment and store in Express.
app.set('port', port);
// Catch any file
app.get('*.*', express.static(path.join(__dirname, 'dist')));
// Catch All
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
/**
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () { return console.log("App running on localhost:" + port); });
//# sourceMappingURL=/Users/techninja/Documents/Docs/Business/WaleYaFoto/site/wyf-app/ts-node/d0e010649790b0d8477697826d4d270de591d90c/f9426bb92d697c11ba6904261ebdc3d75d040cb9.js.map