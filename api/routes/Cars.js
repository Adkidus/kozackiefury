const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');

router.post('/newCar', auth, async (req, res) => {
    try {
        let newCar = req.body;
        const car = new Car(newCar)
        await car.save()
        res.status(201).send(car);
    } catch (e) {
        res.status(500).json({msg:'Nie można dodać samochodu.'});
    }
})

module.exports = router;