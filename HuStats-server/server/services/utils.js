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
 * Extract IP from request
 * @param {object} req 
 */
function extractClientIp(req) {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress || null;
}

module.exports = {
    extractClientIp
};