const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    enum: ['home', 'about', 'services', 'contact'],
  },
  section: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['text', 'image', 'video', 'array'],
  },
  key: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
  metadata: {
    type: Map,
    of: String,
    default: {},
  },
  lastUpdatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
contentSchema.index({ page: 1, section: 1, isActive: 1 });

module.exports = mongoose.model('Content', contentSchema);