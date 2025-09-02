const Education = require("../models/educationModel")

// GET all Education
const getAllEducation = async (req, res, next) => {
  try {
    const education = await Education.find({});
    res.json(education);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllEducation};
