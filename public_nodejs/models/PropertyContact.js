const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertyContactSchema = new Schema({
    offerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offer',
        require: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true ,
    },
    phone: String,
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'new',
        enum: ['new', 'inprogress', 'end']
    }
}, {
    timestamps: true
});

module.exports = PropertyContact = mongoose.model('PropertyContact', PropertyContactSchema);