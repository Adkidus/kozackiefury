const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('../../config/aws');

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
        let fileName = Date.now().toString()+makeid(5)+fileObj[file.mimetype];
        cb(null, 'cars/'+fileName)
      }
    })
})

router.post('/newCar', auth, async (req, res) => {
    try {
        let newCar = req.body;
        const car = new Car(newCar)
        await car.save()
        res.status(201).send(car);
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/uploadImage/:carId', auth, upload.array('fileUpload',3), async(req, res) => {
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
        carUpdated = await Car.findOne({_id: req.params._id});
        res.status(200).json(carUpdated); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.get('/list', auth, async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

module.exports = router;