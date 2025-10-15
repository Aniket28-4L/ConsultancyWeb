const mongoose = require('mongoose');

const countrySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    studyInfo: {
      type: String,
    },
    workInfo: {
      type: String,
    },
    visaRequirements: {
      type: String,
    },
    costOfLiving: {
      type: String,
    },
    popularCities: [String],
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;