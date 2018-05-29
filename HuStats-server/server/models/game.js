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
const Schema = mongoose.Schema;

/**
 * @description Schema for Event Logs
 */
const GameSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  gameTypeId: {
    type: String,
    required: true
  },
  result: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Game', GameSchema);