const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    horse_power: {
        type: String
    },
    engine: {
        type: String
    },
    to_100: {
        type: String
    },
    description: String,
    category: String,
    main_photo: String,
    photos: [{
        key: {
            type: String
        },
        location: {
            type: String
        }
    }],
    services: [
        {
            time: {
                type: String
            },
            price: String,
            title: {
                type: String
            },
            description: {
                type: String
            }
        }
    ],
    active: { 
        type: Boolean,
        default: false
    },
    canceled: {
        type: Boolean,
        default: false
    },
    owner_first_name: String,
    owner_last_name: String,
    owner_email: String,
    owner_phone: String
}, {
    timestamps: true
});

module.exports = Car = mongoose.model('Car', CarSchema);