const express = require('express');
const connectDB = require('./config/db');
const chatHistoryRoute = require('./routes/chatHistory');

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/chathistory', chatHistoryRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
