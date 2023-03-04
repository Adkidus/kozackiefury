const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserPaymentSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    paymentType: String,
    subscriptionType: String,
    price: Number,
    currency: String,
    title: String,
    text: String,
    email: String,
    country: String,
    status: {
        type: String,
        default: 'new',
        enum: ['new', 'inprogress', 'success', 'failed']
    },
    invoice: {
        isCompany: {
            type: Boolean,
            default: false
        },
        firstName: String,
        lastName: String,
        address: String,
        postalCode: String,
        city: String,
        company: String,
        vatCode: String
    },
    createdByAutomat: {
        type: Boolean,
        default: true
    },
    createdUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    paypal: {}
}, {
    timestamps: true
});

module.exports = UserPayment = mongoose.model('UserPayment', UserPaymentSchema);
