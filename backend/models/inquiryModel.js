const mongoose = require('mongoose');

const inquirySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    inquiryType: {
      type: String,
      enum: ['Study Abroad', 'Work Abroad', 'Documentation', 'General'],
      required: true,
    },
    status: {
      type: String,
      enum: ['New', 'In Progress', 'Resolved'],
      default: 'New',
    }
  },
  {
    timestamps: true,
  }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;