
require("dotenv").config();
const mongoose = require("mongoose");

const connectDatabase = async (options = {}) => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            serverSelectionTimeoutMS: 20000, // 20 seconds
            ...options 
        });

        console.log("Successfully connected to the MongoDB database.");

    } catch (error) {
        console.error("Failed to connect to the MongoDB database:", error);
        throw error; // If an error occurs, the startServer try/catch block will catch it and stop the Node.js server
    }
};

module.exports = connectDatabase;