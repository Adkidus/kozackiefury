const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const User = require('../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/register', async(req,res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'Adres E-mail jest już zajęty.' });
        user = new User({ email, password});
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save(function (err) {
            if (err) return res.status(500).send({ msg: err.message });
            res.status(200).send({ msg: 'Konto zostało utworzone!' });
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
})

// @route    POST api/users
// @desc     Register client
// @access   Private
router.post('/registerClient', auth, async(req,res) => {
    const { email, password, first_name, last_name } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'Adres E-mail jest już zajęty.' });
        user = new User({ email, password, first_name, last_name });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        user.role = 'client'
        await user.save(function (err) {
            if (err) return res.status(500).send({ msg: err.message });
            res.status(200).send({ msg: 'Konto zostało utworzone!' });
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
})

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/registerAdmin', async(req,res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'Adres E-mail jest już zajęty.' });
        user = new User({ email, password});
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        user.role = 'admin'
        await user.save(function (err) {
            if (err) return res.status(500).send({ msg: err.message });
            res.status(200).send({ msg: 'Konto zostało utworzone!' });
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
})


module.exports = router;