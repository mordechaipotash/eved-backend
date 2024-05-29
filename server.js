const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3002;

// MongoDB connection string
const mongoURI = 'mongodb+srv://mordechaipotash:6RI1JVIv0nw5wBiX@cluster0.yfxdnkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const conversationSchema = new mongoose.Schema({
    title: String,
    create_time: Number,
    update_time: Number
});

const Conversation = mongoose.model('Conversation', conversationSchema);

app.get('/api/conversations', async (req, res) => {
    try {
        const conversations = await Conversation.find({});
        res.json(conversations);
    } catch (err) {
        console.error('Error fetching conversations:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
