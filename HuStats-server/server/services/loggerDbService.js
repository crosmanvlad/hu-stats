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

const mongoose = require('mongoose');
const EventLog = require('../models/eventLogs');

module.exports = {
    /**
     * Logs every event to the database. 
     * Every log entry will have its own document in the eventLogs collection
     * @param {*} ip Origin of the issue
     * @param {*} message Actual error message
     * @param {*} eventType Type of event (info, warn, error)
     */
    logEvent: (ip, message, eventType) => {

        if (mongoose.connection.readyState === 1) { // Database connected
            var eventLog = new EventLog({ logDate: new Date(), ip: ip, message: message, type: eventType });
            eventLog.save((err, res) => {
                if (err) {
                    console.error(`Error saving log to the database: ${err}`);
                }
            });
        }
    }

};