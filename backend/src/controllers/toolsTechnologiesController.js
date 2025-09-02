const ToolTechnology  = require("../models/toolTechnologyModel");

// GET all Tools & Technologies
const getAllToolsTechnologies = async (req, res, next) => {
  try {
    const tools = await ToolTechnology.find({});
    res.json(tools);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllToolsTechnologies};
