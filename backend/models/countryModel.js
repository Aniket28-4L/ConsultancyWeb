import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  studyInfo: { type: String, required: true },
  workInfo: { type: String, required: true },
  visaRequirements: { type: String, required: true },
  costOfLiving: { type: String, required: true },
  popularCities: [{ type: String }],
}, {
  timestamps: true,
});

export default mongoose.model('Country', countrySchema);