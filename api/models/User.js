const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
    active: { 
        type: Boolean,
        default: true
    },
    role: { 
        type: String, 
        enum: ['admin', 'user', 'customer'], 
        default: 'user' 
    },
}, {
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);
