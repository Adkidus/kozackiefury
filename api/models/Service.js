const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String
}, {
    timestamps: true
});

module.exports = Service = mongoose.model('Service', ServiceSchema);