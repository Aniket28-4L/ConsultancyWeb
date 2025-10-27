import mongoose from "mongoose";

const processSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  stepNumber: { type: Number, required: true },
  processType: {
    type: String,
    enum: ["Study Abroad", "Work Abroad", "Documentation"],
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model("Process", processSchema);