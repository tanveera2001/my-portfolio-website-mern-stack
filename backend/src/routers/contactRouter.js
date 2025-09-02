const express = require("express");
const { submitContactForm } = require("../controllers/contactController");

const contactRouter = express.Router();

contactRouter.post("/", submitContactForm);

module.exports = contactRouter;
