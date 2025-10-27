const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
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
  type: {
    type: String,
    required: true,
    enum: ['Study Abroad', 'Work Abroad', 'Documentation']
  }
}, {
  timestamps: true
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;