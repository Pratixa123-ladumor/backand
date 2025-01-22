const Submit = require("../models/submit");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");




const submitform = async (req, res) => {
    try {
        const newSubmission = new Submit(req.body);
        await newSubmission.save();
        res.status(200).json({ message: "Form data saved successfully!" });
    } catch (error) {
        console.error("Error saving form data:", error);
        res.status(400).json({ message: "Failed to save form data" });
    }
};

const getform = async (req, res) => {
    try {
        const user = await Submit.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send('Error fetching user')
    }
}

const dashbord = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send('Error fetching user')
    }
}


const signup = async (req, res) => {
    console.log(req.body);
    try {
        const { firstname, lastname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            firstname, lastname, email, password: hashPassword,
        });
        await createdUser.save();
        res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(400).json({ message: "Internal server error" });
    }
};





const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Received email: ", email, "Received password: ", password);
        const user = await User.findOne({ email });

        if (!user) {
            console.log("No user found with this email");
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            console.log("Password mismatch");
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({
            message: "Login successful",
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(400).json({ message: "Internal server error" });
    }
};


module.exports = {
    submitform,
    dashbord,
    getform,
    signup,
    login
};
