const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PricingSchema = new Schema({
    country: String,
    countryCode: String,
    currency: String,
    standard: Number,
    silver: Number,
    gold: Number
}, {
    timestamps: true
});

module.exports = Pricing = mongoose.model('Pricing', PricingSchema);