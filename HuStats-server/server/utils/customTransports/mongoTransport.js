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

const Transport = require('winston-transport');
const logEvent = require('../../services/loggerDbService').logEvent;

// Inherit from `winston-transport` so we can take advantage of 
// the base functionality and `.exceptions.handle()`
module.exports = class MongoTransport extends Transport {
    constructor() {
        super();
    }

    log(eventType, message) {
        setImmediate(() => {
            this.emit('logged', eventType);
        });

        // Log to the database
        // TODO: Change first arg for the real one once we start receiving requests
        logEvent('192.168.0.1', message, eventType);
    }
};
