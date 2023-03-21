const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    carId:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    person: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: String,
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