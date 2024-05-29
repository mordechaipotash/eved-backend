const express = require('express');
const router = express.Router();
const chatHistoryController = require('../controllers/chatHistoryController');

router.get('/', chatHistoryController.getChatHistory);

module.exports = router;
