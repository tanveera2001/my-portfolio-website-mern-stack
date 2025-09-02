const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
    {
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        location: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true }
);

const Education = model("Education", educationSchema);

module.exports = Education;
