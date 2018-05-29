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
 * Health router
 *  
 */

const { security } = require('./handlers/securityHandler');
const mongoose = require('mongoose');

module.exports = router => {

    router.get('/health-check', security, require('express-healthcheck')({
        healthy: () => {
            if (mongoose.connection.readyState === 1) {
                return  { state: 'healthy' };
            }
        },
        test:  () => {
            if (mongoose.connection.readyState !== 1) {
                return  { state: 'unhealthy' };
            }
        }
    }));

}