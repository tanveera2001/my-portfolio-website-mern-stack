const WorkExperience = require("../models/workExperienceModel");

// GET all Work Experience
const getAllWorkExperience = async (req, res, next) => {
  try {
    const workExperience = await WorkExperience.find({});
    res.json(workExperience);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllWorkExperience};
