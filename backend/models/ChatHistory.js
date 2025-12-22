const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  messages: [{
    role: {
      type: String,
      enum: ['user', 'assistant', 'system'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    tokens: {
      type: Number,
      default: 0,
    },
  }],
  model: {
    type: String,
    default: 'llama-3.3-70b-versatile',
  },
  totalTokens: {
    type: Number,
    default: 0,
  },
  metadata: {
    ipAddress: String,
    userAgent: String,
    referrer: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for efficient queries
chatHistorySchema.index({ sessionId: 1 });
chatHistorySchema.index({ userId: 1 });
chatHistorySchema.index({ createdAt: -1 });

module.exports = mongoose.model('ChatHistory', chatHistorySchema);