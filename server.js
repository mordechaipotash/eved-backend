// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db'); // Ensure this path is correct based on your project structure

const app = express();
const PORT = process.env.PORT || 3002;

const conversationSchema = new mongoose.Schema({
    title: String,
    create_time: Number,
    update_time: Number
});

const youtubeHistorySchema = new mongoose.Schema({
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

const Conversation = mongoose.model('Conversation', conversationSchema);
const YouTubeHistory = mongoose.model('YouTubeHistory', youtubeHistorySchema);

app.use(bodyParser.json());

// Conversation Routes

// Get all conversation titles
app.get('/api/titles', async (req, res) => {
    try {
        const titles = await Conversation.find({}, { title: 1, _id: 0 });
        res.json(titles);
    } catch (err) {
        console.error('Error fetching titles:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Get a conversation by ID
app.get('/api/conversation/:id', async (req, res) => {
    try {
        const conversation = await Conversation.findById(req.params.id);
        res.json(conversation);
    } catch (err) {
        console.error('Error fetching conversation:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Create a new conversation
app.post('/api/conversation', async (req, res) => {
    try {
        const newConversation = new Conversation(req.body);
        await newConversation.save();
        res.status(201).json(newConversation);
    } catch (err) {
        console.error('Error creating conversation:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Update a conversation by ID
app.put('/api/conversation/:id', async (req, res) => {
    try {
        const updatedConversation = await Conversation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedConversation);
    } catch (err) {
        console.error('Error updating conversation:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Delete a conversation by ID
app.delete('/api/conversation/:id', async (req, res) => {
    try {
        await Conversation.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting conversation:', err);
        res.status(500).send('Internal Server Error');
    }
});

// YouTube History Routes

// Get all YouTube watch history
app.get('/api/youtubeHistory', async (req, res) => {
    try {
        const history = await YouTubeHistory.find();
        res.json(history);
    } catch (err) {
        console.error('Error fetching YouTube history:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Add new YouTube watch history
app.post('/api/youtubeHistory', async (req, res) => {
    try {
        const newEntry = new YouTubeHistory(req.body);
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (err) {
        console.error('Error adding YouTube history:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
