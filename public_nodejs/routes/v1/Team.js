const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { transporter } = require('../../config/mail');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const Users = require('../../models/User');
const Referral = require('../../models/Referral');

router.get('/list', auth, async(req, res) => {
    try{
        let team = await Users.find().or([{ role: 'assistant' }, { role: 'agent' }]).select('_id firstName lastName email prefix phone role defaultCountry')
        return res.status(200).send(team)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.post('/new', auth, async(req,res) => {
    try {
        let user = new Users(req.body);
        user.refCode = crypto.randomBytes(16).toString('hex')
        await user.save(function (err) {
            if (err) return res.status(500).send({ message: err.message });
            let mailOptions = { to: user.email, subject: 'Account Activate', text: 'Hello '+ user.firstName +',\n\n' + 'Please activate your account by clicking the link: \nhttps:\/\/' + process.env.AUTH_PAGE + '\/activateAccount\/' + user._id + '\n\nThank You!\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) return res.status(500).send({message:'Technical Issue!, Please click on resend for verify your Email.'});
                return res.status(201).send({message: 'A verification email has been sent to ' + user.email + '. It will be expire after one day. If you not get verification Email click on resend token.'});
            });
        })
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/activate/:token', async(req, res) => {
    try{
        let user = await Users.findOne({_id: req.params.token, verified: false})
        if(!user)
            return res.status(400).send({message: 'User not found'})
        if(user.role === 'user')
            return res.status(500).send({message: 'Cannot activate'})
        return res.status(200).send({firstName: user.firstName})
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.post('/activate', async(req, res) => {
    try {
        let user = await Users.findOne({_id: req.body.token, verified: false})
        if(user.role === 'user')
        return res.status(500).send({message: 'Cannot activate'})
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        user.verified = true;
        const saved = await user.save()
        return res.status(200).send({message: 'Success'})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})
 
module.exports = router;