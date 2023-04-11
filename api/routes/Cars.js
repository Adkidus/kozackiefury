const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
// const multer = require('multer')
// const multerS3 = require('multer-s3')
// const aws = require('../config/aws');
const Car = require('../models/Car');

const multer = require('multer');
// const sharp = require('sharp');
const SharpMulter = require("sharp-multer");
const fs = require('fs');

// const upload = multer({
//     storage: multerS3({
//       s3: aws.s3,
//       bucket: aws.bucket,
//       acl: 'public-read',
//       contentType: multerS3.AUTO_CONTENT_TYPE,
//       metadata: function (req, file, cb) {
//         cb(null, {fieldName: file.fieldname});
//       },
//       key: function (req, file, cb) {
//         let fileObj = {
//             "image/png": ".png",
//             "image/jpeg": ".jpeg",
//             "image/jpg": ".jpg",
//             "image/webp": ".webp"
//         };
//         let fileName = Date.now().toString()+fileObj[file.mimetype];
//         cb(null, fileName)
//       }
//     })
// })

const storage = SharpMulter({
    destination: (req, file, cb) => {
        const directory = `./public/uploads/cars`
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true })
        }
        cb(null, directory)
    },
    imageOptions:{
        fileFormat: "webp",
        quality: 80,
        useTimestamp: true,
    },
})

const upload = multer({ 
    storage
})

router.post('/new', auth, async (req, res) => {
    try {
        if(req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        let newCar = req.body;
        let carPathName = `${newCar.brand} ${newCar.model} ${Math.random().toString(36).slice(2, 6)}`;
        newCar.pathName = carPathName.toLowerCase().split(' ').join('-')
        const car = new Car(newCar)
        await car.save()
        res.status(201).send(car);
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/uploadImage/:carId', [auth, upload.array('images', 10)], async(req, res) => {
    try {
        if(req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        // const car = await Car.findOne({_id: req.params.carId})
        // req.files.forEach(img => {
        //     car.photos.push({key: img.key, location: img.location})
        // });
        //        car.photos.push({key: req.files[0].key, location: req.files[0].location})
        const images = [...req.files]
        const mainImageAlt = req.body.mainImage;
        const mainImage = images.find(i => i.originalname === mainImageAlt)
        const main_photo =  process.env.IMG_URL + mainImage.path
        let photos = []
        images.forEach(e => photos.push({key: req.files[0].key, location: process.env.IMG_URL + e.path}))
        await Car.findOneAndUpdate(
            { _id: req.params.carId }, 
            { photos, main_photo })

        //'Successfully uploaded ' + req.files.length + ' files!'
        res.status(201).send('Successfully uploaded');
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
});

// router.post('/update', auth, async(req, res) => {
//     try {
//         if(req.user.role !== 'admin')
//             return res.status(403).json({msg: 'Brak Dostępu!'});
//         await Car.updateOne({_id: req.body._id},req.body);
//         carUpdated = await Car.findOne({_id: req.body._id});
//         res.status(200).json(carUpdated); 
//     } catch (e) {
//         res.status(500).json({msg:'Error: ' + e.message});
//     }
// })

router.post('/updateDetails/:id', auth, async(req, res) => {
    try {
        if(req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        const {brand, model, horse_power, engine, to_100, vmax, description, category} = req.body;
        await Car.updateOne({_id: req.params.id}, {brand, model, horse_power, engine, to_100, vmax, description, category});
        res.status(200).send('Successfully updated!'); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/addService/:carId', auth, async(req, res) => {
    try {
        if(req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        const {carId} = req.params
        const {title, price, time, description} = req.body;
        const car = await Car.findOne({_id: carId});
        const services = car.services;
        services.push({title, price, time, description})
        await car.save()
        res.status(200).json(car); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/updateService/:carId/:serviceId', auth, async(req, res) => {
    try {
        if(req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        const {carId, serviceId} = req.params
        const {title, price, time, description} = req.body;
        const car = await Car.findOne({_id: carId});
        const services = car.services;
        const index = services.findIndex(s => s._id.toString() === serviceId);
        if (index === -1) res.status(404).send('Service not found');
        services[index] = {title, price, time, description, _id: serviceId};
        await Car.updateOne({_id: req.params.id}, {services});
        res.status(200).json(car); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.delete('/deleteService/:carId/:serviceId', auth, async(req, res) => {
    try {
        if(req.user.role !== 'admin')
            return res.status(403).json({msg: 'Brak Dostępu!'});
        const {carId, serviceId} = req.params
        const car = await Car.findOne({_id: carId});
        const services = car.services;
        const index = services.findIndex(s => s._id.toString() === serviceId);
        if (index === -1) res.status(404).send('Service not found');
        services.splice(index, 1); 
        await car.save()
        res.status(200).json(car); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.post('/addImage/:carID', [auth, upload.single('image')], async(req,res) => {
    try {
        const {carID} = req.params
        const car = await Car.findOne({_id: carID})
        let photos = car.photos;
        photos.push({location: process.env.IMG_URL + req.file.path})
        await car.save()
        return res.status(201).send(car)
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.delete('/deleteImage/:carID/:photoID', auth, async(req, res) => {
    try {
        const {carID, photoID} = req.params
        const car = await Car.findOne({_id: carID});
        const photos = car.photos;
        if(photos.length < 2) return res.status(400).send('Minimum 1 image!');
        const imageIndex = photos.findIndex(i => i._id.toString() === photoID)
        if (imageIndex === -1) res.status(404).send('Image not found');
        const imageUrl = photos[imageIndex].location;
        const imgUrl = imageUrl.split(process.env.IMG_URL).pop()
        if (fs.existsSync(imgUrl)) 
            fs.unlinkSync(imgUrl);
        photos.splice(imageIndex, 1);
        await car.save()
        return res.status(200).send(car)
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.get('/list', auth, async (req, res) => {
    try {
        let cars = [];
        if(req.user.role === 'admin')
            cars = await Car.find({})
        else
            cars = await Car.find({userId: req.user.id});
        res.status(200).json(cars); 
    } catch (error) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.get('/byId/:carId', async (req, res) => {
    try {
        const car = await Car.findOne({_id: req.params.carId})
        res.status(200).json(car); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.get('/car/:pathName', async (req, res) => {
    try {
        const thisCar = await Car.find({pathName: req.params.pathName})
        if(!thisCar)
            return res.status(404).send('NOT FOUND'); 
        res.status(200).json(thisCar); 
    } catch (e) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

router.get('/getList', async(req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({msg:'Error: ' + e.message});
    }
})

module.exports = router;