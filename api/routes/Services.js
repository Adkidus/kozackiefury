const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

router.get('/list', async (req, res) => {
    try {
        let services = await Service.find({}).sort({"created_at": 1});
        res.status(200).json(services); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/new', async (req, res) => {
    try {
        if(req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        const nservice = new Service(req.body)
        await nservice.save()
        res.status(201).send(nservice);
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/update', async (req, res) => {
    try {
        if(req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        await Service.updateOne({_id: req.body._id},req.body);
        serviceUpdated = await Service.findOne({_id: req.body._id});
        res.status(200).json(serviceUpdated); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.delete('/:serviceId', async (req, res) => {
    try {
        await Service.deleteOne({_id:req.params.serviceId});
        res.status(200).json({ success: req.params.serviceId })
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

module.exports = router;