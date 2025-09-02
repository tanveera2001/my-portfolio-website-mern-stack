const express = require("express");
const {seedProject, seedToolsTechnologies, seedEducation, seedWorkExperience} = require("../controllers/seedController");
const seedRouter = express.Router();

seedRouter.get("/projects", seedProject);
seedRouter.get("/tools-technologies", seedToolsTechnologies);
seedRouter.get("/education", seedEducation);
seedRouter.get("/work-experience", seedWorkExperience);

module.exports = seedRouter;