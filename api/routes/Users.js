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
    const role = 'admin';
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'Adres E-mail jest już zajęty.' });
        user = new User({ email, password, role: role});
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

// @route    PATCH api/users
// @desc     Register user
// @access   Public
router.patch('/update/:id', auth, async(req,res) => {
    try {
        let id = req.params.id;
        if(req.user.id !== id || req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        const {first_name, last_name, email, phone} = req.body;
        await User.updateOne({_id: id}, {first_name: first_name, last_name:last_name, email:email, phone:phone});
        res.status(200).json({msg: 'Twoje dane zostały zaktualizowane!'});
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error');
    }
})

module.exports = router;