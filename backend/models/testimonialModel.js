import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  image: { type: String },
  serviceType: {
    type: String,
    enum: ["Study Abroad", "Work Abroad", "Documentation", "General"],
  },
}, {
  timestamps: true,
});

export default mongoose.model('Testimonial', testimonialSchema);