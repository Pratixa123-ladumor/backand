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
    try {
        const { firstname, lastname, email, password } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({ firstname, lastname, email, password: hashPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Signup Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcryptjs.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(400).json({ message: "Internal server error" });
    }
};


const update = async (req, res) => {
    try {
        const user = await Submit.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
        return res.status(200).json({ data: user });

    } catch (error) {
        return res.status(400).json({ message: error?.message });
    }
}

const remove = async (req, res) => {
    try {
        const user = await Submit.findByIdAndDelete(req.params.id);
        return res.status(200).json({ data: user });

    } catch (error) {
        return res.status(400).json({ message: error?.message });
    }
}



module.exports = {
    submitform,
    dashbord,
    getform,
    signup,
    login,
    update,
    remove
};