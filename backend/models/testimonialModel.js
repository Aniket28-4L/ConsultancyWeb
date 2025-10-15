const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    image: {
      type: String,
    },
    serviceType: {
      type: String,
      enum: ['Study Abroad', 'Work Abroad', 'Documentation', 'General'],
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;