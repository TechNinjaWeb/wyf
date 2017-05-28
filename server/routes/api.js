const path = require('path');
const csrf = require('csurf');
const express = require('express');
const router = express.Router();

// Get our Parse API routes
const parse_routes = require('./parse');
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// Add Live Query to Router var: TN Custom
router.StartLiveQuery = parse_routes.startLiveQuery;

/* GET api listing. */
router.use('/parse', parse_routes.parse_server);
router.get(['/admin', '/login', '/apps'], parse_routes.parse_dashboard);
router.post('/login', parse_routes.parse_dashboard);

/* MUST BE AUTHENTICATED IN THE FUTURE!!!!!!!!! */
router.get('/parse-dashboard-config.json', (req, res, next)=> {
  // Send client config to fix admin backend errors
  res.status(200).json(parse_routes.config.dashboard);
  next();
});

// Capture all other url patterns
router.get('*', (req, res, next)=>{
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = router;
