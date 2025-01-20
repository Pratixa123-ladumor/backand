const { Router } = require("express");
const { submitform, signup, login, dashbord } = require("../controllers/user");

const router = Router();

router.get("/dashbord", dashbord);

router.post("/submitform", submitform);

router.post("/signup", (req, res) => {
    console.log("Signup route hit");
    // Your signup logic here
    res.send('Signup successful');
});


router.post("/login", login);

module.exports = router;