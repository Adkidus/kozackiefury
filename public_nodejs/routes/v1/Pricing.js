const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Pricing = require('../../models/Pricing');

router.get('/list', async(req, res) => {
    try{
        let list = await Pricing.find()
        return res.status(200).send(list)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.post('/add', auth, async(req, res) => {
    try{
        let price = await new Pricing(req.body).save()
        return res.status(201).send(price)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})
 
module.exports = router;