const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReferralSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: 'User',
    },
    token: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true
});

module.exports = Referral = mongoose.model('Referral', ReferralSchema);