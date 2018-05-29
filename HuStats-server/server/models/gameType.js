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
const GameTypeSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  gameTypeId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  buyIn: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  minTarget: {
    type: Number
  },
  currency: {
    type: String
  }
});

// GameTypeSchema.pre('save', function(next) {
//   this.minTarget = this.buyIn / (2 * (this.buyIn - this.tax));
//   next();
// });

module.exports = mongoose.model('GameType', GameTypeSchema);