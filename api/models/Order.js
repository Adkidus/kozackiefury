const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    car: {
        carId:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Car'
        },
        pathName: String,
        carName: String,
        photo: String,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: String,
    email: {
        type: String,
        required: true,
    },
    phone: String,
    rent_for_subject: String,
    company: {
        name: String,
        nip: String,
        address: String,
        city: String,
        postal_code: String,
    },
    service:{
        title: String,
        price: String,
        time: String,
        description: String,
    },
    location: String,
    date: String,
    notes: String,
}, {
    timestamps: true
});

module.exports = Order = mongoose.model('Order', OrderSchema);