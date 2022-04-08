const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('../config/aws');
const Car = require('../models/Car');

const upload = multer({
    storage: multerS3({
      s3: aws.s3,
      bucket: aws.bucket,
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        let fileObj = {
            "image/png": ".png",
            "image/jpeg": ".jpeg",
            "image/jpg": ".jpg"
        };
        let fileName = Date.now().toString()+fileObj[file.mimetype];
        cb(null, fileName)
      }
    })
})

router.post('/new', auth, async (req, res) => {
    try {
        let newCar = req.body;
        let carPathName = `${newCar.brand} ${newCar.model}`;
        newCar.pathName = carPathName.toLowerCase().split(' ').join('-')
        const car = new Car(newCar)
        await car.save()
        res.status(201).send(car);
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/uploadImage/:carId', auth, upload.array('fileUpload',1), async(req, res) => {
    const car = await Car.findOne({_id: req.params.carId})
    car.photos.push({key: req.files[0].key, location: req.files[0].location})
    try {
        await car.save()
        res.status(201).send('Successfully uploaded ' + req.files.length + ' files!');
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
});

router.post('/update', auth, async(req, res) => {
    try {
        await Car.updateOne({_id: req.body._id},req.body);
        carUpdated = await Car.findOne({_id: req.body._id});
        res.status(200).json(carUpdated); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.get('/list', auth, async (req, res) => {
    try {
        let cars = [];
        if(req.user.role === 'admin')
            cars = await Car.find({})
        res.status(200).json(cars); 
    } catch (error) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.get('/carById/:carId', async (req, res) => {
    try {
        const car = await Car.findOne({_id: req.params.carId})
        res.status(200).json(car); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.get('/car/:pathName', auth, async (req, res) => {
    try {
        const thisCar = await Car.findOne({pathName: req.params.pathName})
        if(!thisCar)
            return res.status(404).send('NOT FOUND'); 
        res.status(200).json(thisCar); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/deleteImage', auth, async (req, res) => {
    try {
        aws.s3.deleteObject({
            Bucket: aws.bucket,
            Key: req.body.photokey
        }, function(err, data) {
            if (err)  
                res.status(500).json(err);
        });
        await Car.updateOne({_id: req.body.car._id},req.body.car);
        carUpdated = await Car.findOne({_id: req.body.car._id});
        res.status(200).json(carUpdated); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

module.exports = router;