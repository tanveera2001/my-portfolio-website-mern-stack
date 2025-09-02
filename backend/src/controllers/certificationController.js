const Certification = require("../models/certificationModel")

// GET all Certificates
const getAllCertificates = async (req, res, next) => {
  try {
    const certificates = await Certification.find({});
    res.json(certificates);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllCertificates};
