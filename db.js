const { connect } = require("mongoose");


function dbConnection() {

    connect("mongodb://localhost:27017/Videshivibe")
        .then(() => {
            console.log("database connected");
        })
        .catch(() => {
            console.log("connection failed");
        });
}

module.exports = dbConnection;