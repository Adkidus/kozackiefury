const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserPayment',
    },
    incomePrice: Number,
    percent: Number
}, {
    timestamps: true
});

module.exports = Income = mongoose.model('Income', IncomeSchema);
