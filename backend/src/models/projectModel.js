const {Schema, model} = require("mongoose");

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^https?:\/\/.+$/.test(v),
        message: "Invalid URL format",
      },
    },
  },
  { timestamps: true }
);

const Project = model("Projects", projectSchema );
module.exports = Project;
