const express = require('express');
const router = express.Router();
const ChatHistory = require('../models/ChatHistory');

// Get all chat history
router.get('/', async (req, res) => {
  try {
    const chatHistory = await ChatHistory.find();
    res.json(chatHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
