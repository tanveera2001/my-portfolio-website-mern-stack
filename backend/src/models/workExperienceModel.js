const { Schema, model } = require("mongoose");

const workExperienceSchema = new Schema(
  {
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    points: { type: [String], default: [] },
  },
  { timestamps: true }
);

const WorkExperience = model("WorkExperience", workExperienceSchema);

module.exports = WorkExperience;
