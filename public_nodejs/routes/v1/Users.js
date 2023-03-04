const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const express = require('express');
const { transporter } = require('../../config/mail');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Token = require('../../models/Token');
const Invite = require('../../models/Invite');

// @route    POST /users/register
// @desc     Register user
// @access   Public
router.post('/register', async(req,res) => {
    try {
        const { email, password, firstName, lastName, prefix, phone, refCode } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'E-mail address already exist.', localStr: 'emailExist' });
        user = new User({ email, password, firstName, lastName, prefix, phone });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        if(refCode && refCode !== ''){
            const refUser = await User.findOne({refCode: refCode})
            if(refUser){
                let date = new Date();
                date.setDate(date.getDate() + 31);
                user.ref = {
                    userId: refUser._id,
                    firstName: refUser.firstName,
                    lastName: refUser.lastName,
                    email: refUser.email,
                    prefix: refUser.prefix,
                    phone: refUser.phone,
                }
                user.subscriptionExpire = date
            }
        }
        await user.save(function (err) {
            if (err) return res.status(500).send({ message: err.message });
            let token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
            token.save(function (err) {
                if (err) { return res.status(500).send({ message: err.message }); }
                let mailOptions = { to: user.email, subject: 'Account Verification Link', text: 'Hello '+ firstName +',\n\n' + 'Please verify your account by clicking the link: \nhttps:\/\/' + process.env.AUTH_PAGE + '\/confirmation\/' + user._id + '\/' + token.token + '\n\nThank You!\n' };
                transporter.sendMail(mailOptions, function (err) {
                    if (err) return res.status(500).send({message:'Technical Issue!, Please click on resend for verify your Email.'});
                    return res.status(201).send({message: 'A verification email has been sent to ' + user.email + '. It will be expire after one day. If you not get verification Email click on resend token.'});
                });
            })
        });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

// @route    PATCH api/users
// @desc     Update user
// @access   Private
router.post('/update', auth, async(req,res) => {
    try {
        const {firstName, lastName, prefix, phone} = req.body;
        let r = await User.updateOne({_id: req.user._id}, {firstName: firstName, lastName:lastName, prefix: prefix, phone:phone});
        res.status(200).json({message: 'Twoje dane zostały zaktualizowane!'});
    } catch (error) {
        res.status(500).send('Server error');
    }
})

// @route    POST /users/setPassword
// @desc     Set user password
// @access   Private
router.post('/setPassword', auth, async(req,res) => {
    try {
        let {password, newPassword, rePassword} = req.body;
        if(newPassword !== rePassword)
            return res.status(400).json({message: 'Hasła nie są takie same!'});
        let user = await User.findOne({ _id: req.user._id });
        if (!user)
            return res.status(400).json({message: 'Niepoprawne dane (user)!'});
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) 
            return res.status(400).json({ message: 'Niepoprawne dane!'});
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();
        res.status(200).json({message: 'Twoje hasło zostało zmienione!'});
    } catch (error) {
        res.status(500).send('Server error');
    }
})

router.get('/clientsList', auth, async(req,res) => {
    try {
        if(req.user.role === 'user')
            return res.status(401).send({message: 'Access denied!'})
        let list = [];
        if(req.user.role === 'admin')
            list = await User.find({role: 'user'})
        if(req.user.role === 'agent')
            list = await User.find({role: 'user', 'ref.userId': req.user._id})
        res.status(200).send(list)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setToAdmin', async(req,res) => {
    try {
        await User.findOneAndUpdate({email: req.body.email}, {role: 'admin'});
        res.status(200).send(req.body.email + ' is Admin')
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setToUser', async(req,res) => {
    try {
        await User.findOneAndUpdate({email: req.body.email}, {role: 'user'});
        res.status(200).send(req.body.email + ' is User')
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setToAgent', async(req,res) => {
    try {
        await User.findOneAndUpdate({email: req.body.email}, {role: 'agent'});
        res.status(200).send(req.body.email + ' is Agent')
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setToExpire', async(req,res) => {
    try {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        const u = await User.findOneAndUpdate({email: req.body.email}, {subscriptionExpire: date.toLocaleDateString()});
        res.status(200).send(u)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setSubscriptionMo', async(req,res) => {
    try {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        const u = await User.findOneAndUpdate({email: req.body.email}, {subscriptionExpire: date});
        res.status(200).send(u)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/checkSubscription', auth, async(req,res) => {
    try {
        const user = await User.findOne({ _id: req.user._id });
        if(user.role === 'agent' || user.role === 'admin')
            return res.status(200).send({subscriptionActive: true})
        const subscriptionExpire = user.subscriptionExpire
        if(!subscriptionExpire)
            return res.status(400).send({subscriptionActive: false})
        let today = new Date()
        let n = new Date(subscriptionExpire)
        const active = n >= today;
        return res.status(200).send({subscriptionActive: active})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

module.exports = router;