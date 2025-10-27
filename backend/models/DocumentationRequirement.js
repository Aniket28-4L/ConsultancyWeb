import mongoose from "mongoose";

const documentationRequirementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  documentType: {
    type: String,
    enum: ["Study Visa", "Work Visa", "Permanent Residence", "Other"],
    required: true,
  },
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
}, {
  timestamps: true,
});

export default mongoose.model("DocumentationRequirement", documentationRequirementSchema);