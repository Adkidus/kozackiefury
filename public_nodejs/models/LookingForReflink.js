const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LookingForReflinkSchema = new Schema({
    name: String,
    token: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = LookingForReflink = mongoose.model('LookingForReflink', LookingForReflinkSchema);