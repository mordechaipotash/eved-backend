const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Import routes
const chatHistoryRoutes = require('./routes/chatHistory');

// Use routes
app.use('/api/chathistory', chatHistoryRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('Could not connect to MongoDB', err);
        process.exit(1); // Exit the process with an error code
    });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
