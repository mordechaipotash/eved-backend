// models/YouTubeHistory.js
const mongoose = require('mongoose');

const YouTubeHistorySchema = new mongoose.Schema({
  header: String,
  title: String,
  titleUrl: String,
  time: Date,
  products: [String],
  details: [{
    name: String
  }],
  activityControls: [String]
});

module.exports = mongoose.model('YouTubeHistory', YouTubeHistorySchema);
