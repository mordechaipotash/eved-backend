const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chatHistoryRoutes = require('./routes/chatHistory');

const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/chathistory', chatHistoryRoutes);

// Root URL route
app.get('/', (req, res) => {
  res.send('Welcome to the Eved API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
