////////////////////////////////////////////////////////////////////////////////////////
//																					  //
//	Filename: 		index.ts														  //
//	Author: 		Tech Ninja <4umninja@gmail.com>									  //
//	Date: 			May 21, 2017													  //
//	Description: 	Start point for this nodejs server applet						  //
//	Credits: 		1. https://www.youtube.com/watch?v=lncsmB5yfzE					  //
//																					  //
////////////////////////////////////////////////////////////////////////////////////////

// Get dependencies
import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as bodyParser from 'body-parser';

// Dependencies for angular as credited by #1
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { readFileSync } from 'fs';
// Angular module factory dependency gets created upon 'ng build'
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app-server.module.ngfactory';

// Config
const port = process.env.PORT || '3000';
const app = express();
const server = http.createServer(app);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// SEO Template body: Angular 2+ Fix
let template = readFileSync(path.join(__dirname, 'dist', '..', 'index.html')).toString();

// Set App Engine and Distribution Directories
app.engine('html', (_, options, callback) => {
	// Define the options that the renderModuleFactory will use 
	const opts = { document: template, url: options.req.url };
	// Load the angular module then execute the engine's callback 
	renderModuleFactory(AppServerModuleNgFactory, opts)
		.then(html => callback(null, html));
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
app.get('*', (req, res) => {
  res.render('index', { req });
});
/**
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`App running on localhost:${port}`));