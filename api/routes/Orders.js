const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/new', async (req, res) => {
    try {
        const norder = new Order(req.body)
        await norder.save()
        res.status(201).send(norder);
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

module.exports = router;