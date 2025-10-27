const mongoose = require('mongoose');

const documentationRequirementSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  documentType: {
    type: String,
    required: true,
    enum: ['Study Visa', 'Work Visa', 'Permanent Residence', 'Other']
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  }
}, {
  timestamps: true
});

const DocumentationRequirement = mongoose.model('DocumentationRequirement', documentationRequirementSchema);

module.exports = DocumentationRequirement;