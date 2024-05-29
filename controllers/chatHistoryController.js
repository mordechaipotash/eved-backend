const ChatHistory = require('../models/ChatHistory');

const getAllChatHistory = async (req, res) => {
  try {
    const chatHistory = await ChatHistory.find();
    res.json(chatHistory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllChatHistory,
};
