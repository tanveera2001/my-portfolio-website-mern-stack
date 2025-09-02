
const express = require("express");
const { getAllWorkExperience } = require("../controllers/workExperienceController");
const workExperienceRouter = express.Router();

// GET all Tools & Technologies
workExperienceRouter.get("/", getAllWorkExperience);


module.exports = workExperienceRouter;
