const ChatHistory = require('../models/ChatHistory');

exports.getChatHistory = async (req, res) => {
    try {
        const chatHistory = await ChatHistory.find({});
        res.json(chatHistory);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
