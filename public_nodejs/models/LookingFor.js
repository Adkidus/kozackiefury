const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LookingForSchema = new Schema({
    property: {
        transactionType: [String],
        market: [String],
        propertyType: [String],
        country: String,
        location: String,
        priceFrom: String,
        priceTo: String,
        propertyAreaFrom: String,
        propertyAreaTo: String,
    },
    person: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
    },
    ref: String,
    status: {
        type: String,
        enum: ['new', 'agent'],
        default: 'new'
    }
}, {
    timestamps: true
});

module.exports = LookingFor = mongoose.model('LookingFor', LookingForSchema);