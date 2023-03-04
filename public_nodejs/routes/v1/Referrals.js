const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { transporter } = require('../../config/mail');
const auth = require('../../middleware/auth');
const Invite = require('../../models/Invite');
const User = require('../../models/User');
const Referral = require('../../models/Referral');

router.post('/invite', auth,  async(req, res) => {
    try{
        const { email } = req.body;
        const ref = await Referral.findOne({userId: req.user._id})
        let _invite = new Invite({ userId: req.user._id, refId: refId, email: email });
        _invite.save(function (err) {
            if (err) { return res.status(500).send({ message: err.message }); }
            let mailOptions = { to: email, subject: 'Invite - MajNewHome.com', text: 'Hello ' + ',\n\n' + 'Register your account by clicking the link: \nhttps:\/\/' + process.env.AUTH_PAGE + '\/register?ref=\/'+ ref.token + '\n\nThank You!\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) return res.status(500).send({message:'Technical Issue!, Please click on resend for invite.'});
                return res.status(201).send({message: 'A invite email has been sent to ' + email + '.'});
            });
        })
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.post('/addRefForUser', auth, async(req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({email})
        if (!user) { return res.status(500).send({ message: 'User not found' }); } 
        const ref = await Referral.findOne({userID: user._id})
        if(ref) { return res.status(500).send({ message: 'User already have referral code' }); } 
        const nref = new Referral({
            userId: user._id,
            token: crypto.randomBytes(16).toString('hex')
        })
        await nref.save();
        return res.status(201).send({message: 'A referral code has been added to ' + email + '.'});
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

module.exports = router;