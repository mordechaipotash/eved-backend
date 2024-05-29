const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
  // Define the schema fields based on your data structure
  userId: String,
  messages: [{
    sender: String,
    message: String,
    timestamp: Date
  }]
}, { timestamps: true });

module.exports = mongoose.model('ChatHistory', chatHistorySchema);
