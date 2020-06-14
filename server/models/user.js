const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password should not contain the string password')
            }
        }
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;

