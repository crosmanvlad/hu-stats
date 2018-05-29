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

const winston = require('winston');
const MongoTransport = require('./customTransports/mongoTransport');

// Custom logger with
const logger = new (winston.Logger)({
    transports: [
        // console with timestamp
        new (winston.transports.Console)({ 'timestamp': function () { return '[' + new Date().toLocaleString() + ']'; }, 'colorize': true }),
        // our custom MongoDB logger transport
        new MongoTransport()
    ]
});

const env = process.env.NODE_ENV || 'development';

switch (env) {
case 'production': 
    logger.level = process.env.LOG_LEVEL || 'warn';
    break;
default:
    logger.level = 'debug';
}

// If logger level set by environment variable - overwrite old value
if (process.env.LOGGING_LEVEL) {
    logger.level = process.env.LOGGING_LEVEL;
}

module.exports = logger;
