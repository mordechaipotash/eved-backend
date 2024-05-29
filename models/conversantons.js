const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    // Define the schema according to your data structure
    title: String,
    create_time: Number,
    update_time: Number,
    // Add other fields as necessary
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
