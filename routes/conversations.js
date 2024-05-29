const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation'); // Adjust the path as necessary

router.get('/', async (req, res, next) => {
    try {
        const conversations = await Conversation.find();
        res.json(conversations);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
