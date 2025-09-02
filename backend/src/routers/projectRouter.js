// backend/src/routers/projectRouter.js
const express = require("express");
const { getAllProjects, deleteProjectById } = require("../controllers/projectController");
const projectRouter = express.Router();

// GET all projects
projectRouter.get("/", getAllProjects);

// DELETE project by ID
projectRouter.delete("/:id", deleteProjectById);

module.exports = projectRouter;
