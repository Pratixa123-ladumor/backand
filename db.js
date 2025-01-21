require('dotenv').config();
const { connect } = require("mongoose");

function dbConnection() {
    const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/Videshivibe"; // Fallback to localhost for development
    connect(dbURI)
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => {
            console.error("Connection failed:", error.message);
        });
}

module.exports = dbConnection;
