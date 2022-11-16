const mongoose = require('mongoose');
const validator = require('validator')

// Creating schema
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    job_title: {
        type: String,
        required: true,
        trim: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },
    company_name: {
        type: String,
        required: true,
        trim: true,
    },
    language: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    preferred_color: {
        type: String,
        required: true,
        trim: true,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User