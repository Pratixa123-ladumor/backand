const express = require("express");
const router = require("./routes/user");
const cors = require("cors");
require('dotenv').config();

require("./db")();
const app = express();
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("<h1>Videshivibe master</h1>");
});


app.use("/Videshivibe", router);

app.listen(8000, () => {
    console.log("application running");

});
