const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfferSchema = new Schema({
    price: {
        type: Number,
        required: true,
    },
    currency: String,
    negotiable: {
        type: Boolean,
        default: false
    },
    marketType: String,
    transactionType: {
        type: String,
        enum: ['sell', 'rent']
    },
    propertyType: String,
    propertyArea: Number,
    rooms: Number,
    floor: Number,
    buildYear: Number,
    near: [String],
    amenities: [String],
    place_id: String,
    lat: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    province: {
        type: String,
    },
    provincePlaceId: {
        type: String,
    },
    city: {
        type: String,
    },
    cityPlaceId: {
        type: String,
    },
    district: {
        type: String,
    },
    districtPlaceId: {
        type: String,
    },
    street: {
        type: String,
        required: true,
    },
    buildingNo: String,
    description: [{
        lang: String,
        text: String
    }],
    mainImage: String,
    images: [String],
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    contactName: String,
    contactPhone: String,
    contactMail: String,
    expireDate: {
        type: Date
    },
    status: {
        type: String,
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    transactionSuccess: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = Offer = mongoose.model('Offer', OfferSchema);