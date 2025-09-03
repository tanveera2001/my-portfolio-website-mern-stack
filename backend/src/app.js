
const express = require("express");
const morgan = require("morgan");
const path = require("path");



const customCors = require("./config/cors");
const seedRouter = require("./routers/seedRouter");
const projectRouter = require("./routers/projectRouter");
const toolsTechnologiesRouter = require("./routers/toolsTechnologiesRouter");
const educationRouter = require("./routers/educationRouter");
const workExperienceRouter = require("./routers/workExperienceRouter");
const contactRouter = require("./routers/contactRouter");
const certificationRouter = require("./routers/certificationRouter");



const app = express();


// Global Middlewares
app.use(customCors);
app.use(morgan("dev"));
app.use(express.json()); // For this we can submit form data
app.use(express.urlencoded({ extended: true }));  // If we send form-data from Postman or we upload files



// 📁 Public Static Files
app.use(express.static(path.join(__dirname, "..", "public")));



// API Routes
app.use("/api/seed", seedRouter);
app.use("/api/projects", projectRouter);
app.use("/api/tools-technologies", toolsTechnologiesRouter);
app.use("/api/education", educationRouter);
app.use("/api/work-experience", workExperienceRouter);
app.use("/api/contact", contactRouter);
app.use("/api/certifications", certificationRouter);

app.get("/", (req, res) => {
    res.send("Congratulations! You did it.");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("🚨 Server Error:", err);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message // remove in production
  });
});


// Export App
module.exports = app;

