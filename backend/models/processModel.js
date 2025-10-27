const mongoose = require('mongoose');

const processSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  stepNumber: {
    type: Number,
    required: true
  },
  processType: {
    type: String,
    required: true,
    enum: ['Study Abroad', 'Work Abroad', 'Documentation']
  }
}, {
  timestamps: true
});

const Process = mongoose.model('Process', processSchema);

module.exports = Process;