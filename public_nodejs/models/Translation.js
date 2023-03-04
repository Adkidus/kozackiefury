const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TranslationSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    values: {
        pl: {
            type: String,
            default: ''
        },
        en: {
            type: String,
            default: ''
        },
        es: {
            type: String,
            default: ''
        },
        it: {
            type: String,
            default: ''
        }
    }
}, {
    timestamps: true
});

module.exports = Translation = mongoose.model('Translation', TranslationSchema);