
const express = require("express");
const { getAllToolsTechnologies } = require("../controllers/toolsTechnologiesController");
const toolsTechnologiesRouter = express.Router();

// GET all Tools & Technologies
toolsTechnologiesRouter.get("/", getAllToolsTechnologies);


module.exports = toolsTechnologiesRouter;
