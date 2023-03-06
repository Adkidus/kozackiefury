const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    time: String,
    description: String
}, {
    timestamps: true
});

module.exports = Service = mongoose.model('Service', ServiceSchema);