const express = require('express');
const { transporter } = require('../../config/mail');
const router = express.Router();

router.get('/test', async (req, res) => {
    try {
        transporter.verify(function (error, success) {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send("Server is ready to take our messages");
            }
        });
    } catch (e) {
        res.status(500).json({message: 'Server Error!'});
    }
})

module.exports = router;