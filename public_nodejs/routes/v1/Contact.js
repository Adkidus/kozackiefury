const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { transporter } = require('../../config/mail');
const PropertyContact = require('../../models/PropertyContact');
const Offer = require('../../models/Offer');

router.post('/property', async(req,res) => {
    try {
        const {offerId, fullName, email, phone, message} = req.body
        const o = await Offer.findOne({_id: offerId})
        const pc = await new PropertyContact({offerId, fullName, email, phone, message}).save()
        return res.status(200).send('Success!')
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/list', auth, async(req, res) => {
    try {
        const list = await PropertyContact.find();
        let offersId = [];
        list.forEach(e => {
            if(!offersId.includes(e.offerId))
            offersId.push(e.offerId)
        });
        const offersList = await Offer.find( { _id : { $in : offersId } } );
        return res.status(200).json({
            contacts: list,
            offers: offersList
        })
    } catch (error) {
        
    }
})
 
module.exports = router;