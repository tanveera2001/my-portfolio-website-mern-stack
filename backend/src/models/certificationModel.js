const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    issuer: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Certification = mongoose.model("Certification", certificationSchema);
module.exports = Certification;
