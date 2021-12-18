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
                type: Number
            },
            name: {
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true
});

module.exports = Car = mongoose.model('Car', CarSchema);