const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Token = require('../../models/Token');
const { transporter } = require('../../config/mail');

// @route    GET /auth/
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        let user = await User.findOne({_id : req.user._id}).select('firstName lastName email role')
        if (!user) return res.status(401).send({ message: 'Please authenticate.' })
        res.send({ data: user });
    } catch (err) {
        return res.status(500).send({ message: error.message });
    }
});

// @route    POST /auth/login
// @desc     Authenticate user & get token
// @access   Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found!'});
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Wrong data!'});
        if(!user.verified) return res.status(400).json({ message: 'User not verified!'});
        const {_id, firstName, lastName, phone, prefix, role} = user;
        const payload = {user: {_id, email, firstName, lastName, role, phone, prefix}};
        if(role !== 'user')
            payload.user.refCode = user.refCode;
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (error, token) => {
                if (error) throw error;
                let r = payload.user
                r.accessToken = token;
                return res.status(200).send(r)
                // res.json({data : { _id, firstName, lastName, email, role, token }});
            }
        );
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
  }
);

router.post('/refreshToken', async(req, res) => {
    try {
        //let user = await User.findOne({token: req.body.token})
        return res.status(200).send({
            email: 'adrian648@gmail.com',
            accessToken: req.body.token
        })
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/verify/:userID/:verifyToken', async(req, res) => {
    const {verifyToken, userID} = req.params;
    try {
        let user = await User.findOne({_id: userID})
        if(!user)
            return res.status(400).send({localeCode: 'userNotFound', statusIcon: 'error', resendToken: false})
        if(user.verified)
            return res.status(400).send({localeCode: 'alreadyVerified', statusIcon: 'info', resendToken: false})
        let token = await Token.findOne({ token: verifyToken, _userId: userID });
        if(!token)
            return res.status(400).send({localeCode: 'tokenExpired', statusIcon: 'warning', resendToken: true})
        await User.findByIdAndUpdate({_id: token._userId}, {verified: true});
        return res.status(200).send({localeCode: 'accountVerified', statusIcon: 'success'})        
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/resendVerify', async (req, res) => {
    try {
        const {userID} = req.body;
        let user = await User.findOne({_id: userID})
        let token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
        await token.save(function (err) {
            if (err) { return res.status(500).send({ message: err.message }); }
            let mailOptions = { to: user.email, subject: 'Account Verification Link', text: 'Hello '+ user.firstName +',\n\n' + 'Please verify your account by clicking the link: \nhttps:\/\/' + process.env.AUTH_PAGE + '\/confirmation\/' + user._id + '\/' + token.token + '\n\nThank You!\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) return res.status(400).send({message:'Technical Issue!, Please click on resend for verify your Email.'});
                return res.status(201).send({message: 'A verification email has been sent to ' + user.email + '. It will be expire after one day. If you not get verification Email click on resend token.'});
            });
        })
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

module.exports = router;