const { connect } = require("mongoose");

function dbConnection() {

    connect(process.env.MONGO_URI)
        .then(() => {
            console.log("database connected");
        })
        .catch(() => {
            console.log("connection failed");
        });
}

module.exports = dbConnection;