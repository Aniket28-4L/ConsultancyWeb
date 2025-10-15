const mongoose = require('mongoose');

const universitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Country',
    },
    ranking: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    website: {
      type: String,
    },
    courses: [{
      name: String,
      duration: String,
      fees: String,
      description: String,
    }],
    admissionRequirements: {
      type: String,
    },
    admissionDeadlines: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const University = mongoose.model('University', universitySchema);

module.exports = University;