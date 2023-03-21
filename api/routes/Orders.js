const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Car = require('../models/Car');
const { transporter } = require('../config/mail');

router.post('/new', async (req, res) => {
    try {
        const {person,email,phone,notes,date,location,carID} = req.body;
        const car = await Car.findOne({_id : carID})
        if(!car)
            throw new Error('Car not found');
        const norder = new Order(req.body)
        await norder.save();
        let mailOptions = { 
            to: 'jedyne@kozackiefury.pl', 
            subject: `ZAPYTANIE O WYNAJEM - ${car.brand} ${car.model}`, 
            text: ` Samochód ${car.brand} ${car.model} \n\n Imie i nazwisko: ${person} \n\n Email: ${email} \n\n Telefon: ${phone} \n\n Data: ${date} \n\n Lokalizacja: ${location} \n\n Opis: ${notes}` };
        transporter.sendMail(mailOptions, function (err) {
            if (err) throw new Error('Cannot send email');
            return res.status(201).send(norder);
        });
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/contact', async (req, res) => {
    try {
        const {person,email,phone,notes} = req.body;
        let mailOptions = { 
            to: 'jedyne@kozackiefury.pl', 
            subject: `Formularz Kontaktowy`, 
            text: ` Imie i nazwisko: ${person} \n\n Email: ${email} \n\n Telefon: ${phone} \n\n Opis: ${notes}` };
        transporter.sendMail(mailOptions, function (err) {
            if (err) throw new Error('Cannot send email');
            return res.status(201);
        });
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

module.exports = router;