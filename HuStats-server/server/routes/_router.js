/**
 * Licensed materials - Property of IBM
 * 
 * Open Banking Access Client
 * 
 * Developed by Global Business Services
 * (C) Copyright IBM Corp. 2018 All Rights Reserved.
 * 
 * This asset is provided "as is" and any expressed or implied warranties, including, but not limited to,
 * the implied warranties and fitness for a particular purpose are disclaimed. in no event shall IBM be
 * liable for any direct, indirect, incidental, special, exemplary, or consequential damages.
 */

/** 
 * Main application router
*/
const express = require('express');
const config = require('../config');

// Setup routes
const router = express.Router();
require('./gameType')(router);
require('./healthCheckRouter')(router);
require('./game')(router);

module.exports = app => {
    
  app.use(config.apiPath, router);
    
};