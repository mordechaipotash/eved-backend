// scripts/ingestYouTubeHistory.js
const mongoose = require('mongoose');
const YouTubeHistory = require('../models/YouTubeHistory');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const filePath = path.join(__dirname, '../watch-history.json');
const watchHistoryData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

YouTubeHistory.insertMany(watchHistoryData)
  .then(() => {
    console.log('YouTube watch history ingested');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error ingesting YouTube watch history:', err));
