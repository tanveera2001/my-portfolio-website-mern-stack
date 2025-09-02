
const express = require("express");
const { getAllCertificates } = require("../controllers/certificationController");
const certificationRouter = express.Router();

// GET all Certificates
certificationRouter.get("/", getAllCertificates);


module.exports = certificationRouter;
