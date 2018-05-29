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

module.exports = {

  /**
    * TBD
    * Checks security specific rules before forwarding request further 
    * 
    * @param {object} req
    * @param {object} res
    * @param {object} next
    */
  security: (req, res, next) => {
    next();
  }
};