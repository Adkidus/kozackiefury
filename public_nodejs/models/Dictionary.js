const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DictionarySchema = new Schema({
    name: String,
    values: [{
        label: String,
        value: String
    }]
}, {
    timestamps: true
});

module.exports = Dictionary = mongoose.model('Dictionary', DictionarySchema);