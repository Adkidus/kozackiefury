const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const UserPayment = require('../../models/UserPayment');
const Income = require('../../models/Income');

router.post('/new', async(req,res) => {
    try{
        const {paymentType, price, currency, title, text, email} = req.body
        let _userPayment = new UserPayment({paymentType, price, currency, title, text, email})
        _userPayment.createdByAutomat = false;
        await _userPayment.save()
        return res.status(201).send(_userPayment)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.get('/pay/:paymentID', async(req, res) => {
    try {
        let paymentDetails = await UserPayment.findOne({_id:req.params.paymentID})
        return res.status(200).send(paymentDetails)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/buy', auth, async(req,res) => {
    try {
        const createdByAutomat = false;
        const status = 'success';
        const userId = req.user._id;
        const {paymentType, subscriptionType, price, currency, country, title, text, email, paypal} = req.body
        let _userPayment = new UserPayment({userId, paymentType, subscriptionType, price, currency, country, title, text, email, createdByAutomat, status, paypal})
        await _userPayment.save()
        let date = new Date();
        date.setDate(date.getDate() + 31);
        const u = await User.findOneAndUpdate({_id: req.user._id}, {subscriptionExpire: date, subscriptionType: subscriptionType, subscriptionCountry: country});
        if(u.ref){
            let r = await User.findOne({_id: u.ref.userId})
            let percent = 0;
            switch (subscriptionType) {
                case 'standard':
                    percent = 10;
                    break;
                case 'silver':
                    percent = 15;
                    break;              
                case 'gold':
                    percent = 20;
                    break;
                default:
                    break;
            }
            if(percent > 0){
                let countedIncome = ((percent / 100) * Number(price)).toFixed(2);
                let _income = new Income({paymentId: _userPayment._id, incomePrice: countedIncome, percent})
                _income.save()
            }
        }
        return res.status(200).send({message: 'Payment success!'})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/list', auth, async(req, res) => {
    try {
        let list = await UserPayment.find({userId:req.user._id})
        return res.status(200).send(list)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/invoice', async(req,res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = router;