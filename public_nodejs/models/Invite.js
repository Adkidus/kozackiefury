const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InviteSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    refId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Referral',
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    status: {
        type: String,
        default: 'New',
        enum: ['New', 'Not Verified', 'Accepted', 'Decline']
    }
}, {
    timestamps: true
});

module.exports = Invite = mongoose.model('Invite', InviteSchema);