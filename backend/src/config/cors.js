
require("dotenv").config();

const cors = require("cors");

const FRONTEND_URL = process.env.FRONTEND_URL;

const corsOptions = {
  origin: function (origin, callback) {
    
    if (!origin) return callback(null, true); // Postman has no origin, so when we request from Postman, this line allows it.

    if (origin === FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // This is for allowing cookies
};

module.exports = cors(corsOptions);
