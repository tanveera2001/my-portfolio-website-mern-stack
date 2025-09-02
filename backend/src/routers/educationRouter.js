
const express = require("express");
const { getAllEducation } = require("../controllers/educationController");
const educationRouter = express.Router();

// GET all Education
educationRouter.get("/", getAllEducation);


module.exports = educationRouter;
