import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country", required: true },
  ranking: { type: Number },
  description: { type: String, required: true },
  image: { type: String, required: true },
  website: { type: String, required: true },
  courses: [{ type: String }],
  admissionRequirements: { type: String, required: true },
  applicationDeadlines: { type: String, required: true },
}, {
  timestamps: true,
});

export default mongoose.model('University', universitySchema);