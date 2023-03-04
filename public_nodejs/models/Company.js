const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: String,
    country: String,
    city: String,
    postalCode: String,
    street: String,
    buildingNo: String,
    apartmentNo: String,
    vatCode: String,
    ownerUser: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    users: [ { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' } ],
    subscriptionExpire: Date
}, {
    timestamps: true
});

module.exports = Company = mongoose.model('Company', CompanySchema);
