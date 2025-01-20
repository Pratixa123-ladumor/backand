const express = require("express");
const router = require("./routes/user");
const cors = require("cors");



require("./db")();
const app = express();
app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000', // Aapke frontend ka URL
    methods: ['GET', 'POST'], // Allowed methods
    credentials: true, // Allow cookies (optional)
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("<h1>Videshivibe master</h1>");
});


app.use("/Videshivibe", router);

app.listen(8000, () => {
    console.log("application running");

});
