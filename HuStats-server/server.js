
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

const logger = require('./server/utils/logger');
const dbConnect = require('./server/utils/dbConnector').connect;
const app = require('./app');

// Connect to database
dbConnect(() => {

    // On connect start web server
    app.listen(app.get('port'), '0.0.0.0', () => {
        logger.info(`Microservice listening at port ${app.get('port')} in ${process.env.NODE_ENV || 'development'}`);
    });

});