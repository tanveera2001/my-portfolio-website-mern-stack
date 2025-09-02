// backend/src/controllers/projectController.js
const Project = require("../models/projectModel");

// GET all projects
const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    next(err);
  }
};

// DELETE project by ID
const deleteProjectById = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllProjects, deleteProjectById };
