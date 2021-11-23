// Developer James Assisted me with this project and Mr.Valdez assisted in helping reset my Database

// Import mongoose and dotenv file
const mongoose = require('mongoose');
require('dotenv').config()

// Username Schema
const Schema = mongoose.Schema;

let userSchema = new Schema({
    username:{
        type: String,
        required: true
    }
})

// Export file to Import on other files
let Username = mongoose.model("username", userSchema)
module.exports = Username;