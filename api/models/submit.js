const { Schema, model } = require("mongoose");

const submitschema = new Schema({
    First_Name: { type: String, required: true }, 
    Last_Name: { type: String, required: true },
    Phone_Number: { type: Number, required: true }, 
    Email: { type: String, required: true },  
    Your_Requirements: { type: String, required: true } 
});

const Submit = model("Submit", submitschema);

module.exports = Submit;
