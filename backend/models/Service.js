import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  type: {
    type: String,
    enum: ["Study Abroad", "Work Abroad", "Documentation"],
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model("Service", serviceSchema);