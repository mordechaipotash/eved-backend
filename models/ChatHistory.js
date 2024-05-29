const mongoose = require('mongoose');

const ChatHistorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    create_time: { type: Number, required: true },
    update_time: { type: Number, required: true },
    mapping: { type: Object, required: true },
    moderation_results: { type: Array, required: true },
    current_node: { type: String, required: true },
    plugin_ids: { type: String },
    conversation_id: { type: String, required: true },
    conversation_template_id: { type: String },
    gizmo_id: { type: String }
});

module.exports = mongoose.model('ChatHistory', ChatHistorySchema);
