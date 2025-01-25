const { Router } = require("express");
const { submitform, signup, login, dashbord, getform, update, remove } = require("../controllers/user");

const router = Router();

router.get("/getsubmit", getform);

router.get("/dashbord", dashbord);

router.post("/submitform", submitform);

router.post("/signup", signup);

router.post("/login", login);

router.patch("/update/:id" , update);

router.delete("/remove/:id" , remove);

module.exports = router;