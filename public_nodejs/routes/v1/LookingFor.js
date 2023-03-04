const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const LookingFor = require('../../models/LookingFor');
const LookingForReflink = require('../../models/LookingForReflink');
const crypto = require('crypto');

router.get('/list', auth, async(req, res) => {
    try{
        let list = await LookingFor.find()
        return res.status(200).send(list)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.post('/saveForm', async(req, res) => {
    try{
        const {person, property, refToken} = req.body
        const dataToSave = {
            person,
            property,
        }
        if(refToken){
            let r = await LookingForReflink.findOne({token: refToken})
            dataToSave.ref = r.name;
        }
        const response = await new LookingFor(dataToSave).save()
        return res.status(201).send(response)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.get('/reflinkList', auth, async(req, res) => {
    try{
        let list = await LookingForReflink.find()
        return res.status(200).send(list)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.put('/addReflink', auth, async(req, res) => {
    try{
        const {personName} = req.body;
        const token = crypto.randomBytes(16).toString('hex')
        const ref = await new LookingForReflink({
            name: personName,
            token
        }).save()
        return res.status(201).send(ref)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})


// router.delete('/:id', auth, async(req, res) => {
//     try{
//         await BlogPost.updateOne(
//             {_id: req.params.id, 'author.userId': req.body.userId}, 
//             {state: 'archived'}
//         );
//         return res.status(201).send('Post deleted')
//     }catch(error){
//         return res.status(500).send({ message: error.message });
//     }
// })



 
module.exports = router;