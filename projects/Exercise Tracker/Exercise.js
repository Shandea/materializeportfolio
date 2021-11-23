// Developer James Assisted me with this project and Mr.Valdez assisted in helping reset my Database

// Import mongoose(database) and .env file
const mongoose = require('mongoose');
require('dotenv').config();

// Exercise Schema
const Schema = mongoose.Schema;

let exerciseSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now,
        required: true
    }
    });

// Export file to Import in other file
var Exlist = mongoose.model('Exlist', exerciseSchema)
module.exports = Exlist;
