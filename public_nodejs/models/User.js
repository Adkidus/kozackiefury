const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
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
    prefix: String,
    phone: String,
    role: { 
        type: String, 
        enum: ['admin', 'agent', 'user', 'author'], 
        default: 'user' 
    },
    defaultCountry: String,
    defaultLanguage: String,
    verified: {
        type: Boolean,
        default: false,
    },
    _companyId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Company' 
    },  
    refCode: String,
    ref: {
        userId: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        },
        firstName: String,
        lastName: String,
        email: String,
        prefix: String,
        phone: String,
    },
    subscriptionExpire: Date,
    subscriptionType: String,
    subscriptionCountry: String,
}, {
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);
