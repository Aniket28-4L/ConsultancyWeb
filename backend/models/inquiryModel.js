import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  countryCode: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  pincode: { type: String },
  message: { type: String },
  inquiryType: {
    type: String,
    enum: ["Study Abroad", "Work Abroad", "Documentation", "General"],
    default: "General",
  },
  status: {
    type: String,
    enum: ["New", "In Progress", "Resolved"],
    default: "New",
  },
  createdAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

export default mongoose.model('Inquiry', inquirySchema);