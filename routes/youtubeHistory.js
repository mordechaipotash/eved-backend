// routes/youtubeHistory.js
const express = require('express');
const YouTubeHistory = require('../models/YouTubeHistory');
const router = express.Router();

// Get all YouTube watch history
router.get('/', async (req, res) => {
  try {
    const history = await YouTubeHistory.find();
    res.json(history);
  } catch (err) {
    console.error('Error fetching YouTube history:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Add new YouTube watch history
router.post('/', async (req, res) => {
  try {
    const newEntry = new YouTubeHistory(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    console.error('Error adding YouTube history:', err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
