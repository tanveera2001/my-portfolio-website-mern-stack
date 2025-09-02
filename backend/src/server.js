require('dotenv').config();
const app = require("./app");
const connectDatabase = require("./config/db");

const startServer = async () => {
  try {
    await connectDatabase();
    console.log("Connected to MongoDB");

    const port = process.env.SERVER_PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();
