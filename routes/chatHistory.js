const express = require('express');
const router = express.Router();
const { getAllChatHistory } = require('../controllers/chatHistoryController');

router.get('/', getAllChatHistory);

module.exports = router;
