const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// const aws = require('../../config/aws');
const multer = require('multer');
const sharp = require('sharp');
const SharpMulter  =  require("sharp-multer");
const fs = require('fs');

const storage = SharpMulter({
    destination: (req, file, cb) => {
        const directory = `./public/uploads/${req.user._id}`
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

const translate = require("deepl");
const LANGS = ['EN','PL','ES', 'IT']

const Offer = require('../../models/Offer');

// @route    POST /offers/new
// @desc     Add offer
// @access   Private
router.post('/new', auth, async(req, res) => {
    try{
        const newOffer = req.body;
        const dsc = newOffer.description
        let description = []
        let sourceLanguage = '';
        for(let i in LANGS){
            if(sourceLanguage !== LANGS[i]){
                let translated = await translate({
                    free_api: true,
                    text: dsc,
                    target_lang: LANGS[i],
                    auth_key: process.env.DEEPL,
                })
                let translations = translated.data.translations[0];
                sourceLanguage = translations.detected_source_language
                description.push({
                    lang: LANGS[i],
                    text: translations.text
                })
            }else{
                let inList = description.findIndex(e=>e.lang === sourceLanguage)
                if(inList < 0){
                    description.push({
                        lang: LANGS[i],
                        text: dsc
                    })
                }
            }
        }
        // description.push({
        //     lang: "PL",
        //     text: dsc
        // })
        newOffer.description = description
        newOffer._userId = req.user._id
        newOffer.contactName = req.user.firstName + ' ' + req.user.lastName;
        newOffer.contactPhone = req.user.prefix + req.user.phone;
        newOffer.contactMail = req.user.email
        const offerSave = new Offer(newOffer)
        await offerSave.save();
        return res.status(201).send(offerSave)
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
})

router.post('/uploadSingle', [auth, upload.single('image')], async (req, res) => {
    let o = await Offer.findOne({ _id: req.body.offerId }).select('images')
    let images = [...o.images]
    images.push(process.env.IMG_URL + req.file.path)
    await Offer.findOneAndUpdate(
        { _id: req.body.offerId }, 
        { images })
    return res.status(201).send({images})
})
  
router.post('/uploadMultiple', [auth, upload.array('images', 20)], async(req, res, next) => {
    const images = [...req.files]
    let narr = []
    images.forEach(e => narr.push(process.env.IMG_URL + e.path))
    let m = narr[req.body.mainImage]
    await Offer.findOneAndUpdate(
        { _id: req.body.offerId }, 
        { images: narr, mainImage: m })
    return res.status(201).send('Success')
})

router.post('/newImages', auth, async(req,res) => {
    try {
        let offer = await Offer.findOne({_id: req.body.offerId, isArchived: false})
        offer.images = req.body.images
        await offer.save()
        return res.status(200).send(offer)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/getDetail/:id', auth, async(req,res) => {
    try {
        let _offer = await Offer.findOne({_id: req.params.id})
        return res.status(200).send(_offer)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/list', auth, async(req,res) => {
    try {
        let list = [];
        if(req.user.role === 'admin')
            list = await Offer.find({isArchived: false}).sort({createdAt: -1});
        else
            list = await Offer.find({_userId: req.user._id, isArchived: false}).sort({createdAt: -1});
        return res.status(200).send(list)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/archive', auth, async(req,res) => {
    try {
        let list = [];
        if(req.user.role === 'admin')
            list = await Offer.find({isArchived: true}).select('_id price currency marketType transactionType propertyType propertyArea rooms floor buildYear near amenities country province city district street description mainImage');
        else
            list = await Offer.find({_userId: req.user._id, isArchived: true}).select('_id price currency marketType transactionType propertyType propertyArea rooms floor buildYear near amenities country province city district street description mainImage');
        return res.status(200).send(list)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/public-list/:id', async(req,res) => {
    const filter = {}
    let page = 0;
    const { 
        skip, 
        priceTo, 
        priceFrom, 
        propertyType, 
        transactionType, 
        market, 
        minRooms,
        maxRooms, 
        minBuildYear, 
        maxBuildYear
    } = req.query;

    if(skip)
        page = skip;

    filter.isArchived = false

    if(transactionType)
        filter.transactionType = transactionType

    if(market)
        filter.marketType = market

    if(propertyType)
        filter.propertyType = propertyType

    // Filter Price
    if(priceFrom)
        filter.price = { $gte: priceFrom }
    if(priceTo && filter.price)
        filter.price['$lte'] = priceTo
    else if(priceTo)
        filter.price = { $lte: priceTo }

    // Filter Rooms
    if(minRooms)
        filter.rooms = { $gte: minRooms }
    if(maxRooms && filter.rooms)
        filter.rooms['$lte'] = maxRooms
    else if(maxRooms)
        filter.rooms = { $lte: maxRooms }

    // Filter Build Year
    if(minBuildYear)
        filter.buildYear = { $gte: minBuildYear }
    if(maxBuildYear && filter.buildYear)
        filter.buildYear['$lte'] = maxBuildYear
    else if(maxBuildYear)
        filter.buildYear = { $lte: maxBuildYear }

    try {
        const data = await Offer.find({ $or: [
            { 
                districtPlaceId: req.params.id, 
                ...filter 
            }, 
            { 
                cityPlaceId: req.params.id, 
                ...filter 
            }, 
            { 
                provincePlaceId: req.params.id, 
                ...filter 
            },
            { 
                country: req.params.id, 
                ...filter 
            },
            { 
                place_id: req.params.id, 
                ...filter 
            }
        ]}).sort({_id: -1}).limit(100).skip(page)
        // const totalItems = await Offer.count({
        //     $or: [
        //         { 
        //             districtPlaceId: req.params.id, 
        //             ...filter 
        //         }, 
        //         { 
        //             cityPlaceId: req.params.id, 
        //             ...filter 
        //         }, 
        //         { 
        //             provincePlaceId: req.params.id, 
        //             ...filter 
        //         },
        //         { 
        //             country: req.params.id, 
        //             ...filter 
        //         },
        //         { 
        //             place_id: req.params.id, 
        //             ...filter 
        //         }
        //     ]
        // });
        return res.status(200).send(data)
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error.message });
    }
})

router.get('/latestList', async(req, res) => {
    try {
        const data = await Offer.find({ isArchived: false }).sort({_id: -1}).limit(6)
        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.get('/property/:id', async(req,res) => {
    try {
        const item = await Offer.findOne({ _id: req.params.id, isArchived: false })
        return res.status(200).send(item)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/favorites', async(req,res) => {
    try {
        const {favoritesList} = req.body
        const items = await Offer.find( { _id : { $in : favoritesList } } );
        return res.status(200).send(items)
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setDetails', auth, async(req, res) => {
    try {
        const {
            _id,
            price, 
            currency, 
            buildYear, 
            rooms, 
            floor, 
            propertyArea, 
            negotiable} = req.body;
        const item = await Offer.findOneAndUpdate(
            {_id, _userId: req.user._id, isArchived: false},
            {price, currency, buildYear, rooms, floor, propertyArea, negotiable});
        return res.status(200).send({message: `Offer ${item._id} updated!`})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setMainImage', auth, async(req,res) => {
    try {
        const {offerId, imageUrl} = req.body
        const item = await Offer.findOneAndUpdate(
            {_id: offerId, _userId: req.user._id, isArchived: false},
            {mainImage: imageUrl}
        ) 
        return res.status(200).send({message: `Offer ${item._id} updated!`})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/deleteImage', auth, async(req,res) => {
    try {
        const {offerId, imageUrl} = req.body
        let imgUrl = imageUrl.split(process.env.IMG_URL).pop()
        if (fs.existsSync(imgUrl)) 
            fs.unlinkSync(imgUrl);
        let o = await Offer.findOne({_id: offerId, _userId: req.user._id, isArchived: false}).select('images')
        let images = [...o.images]
        const index = images.indexOf(imageUrl);
        if (index > -1)
          images.splice(index, 1);
        await Offer.findOneAndUpdate({ _id: offerId, isArchived: false }, { images })
        return res.status(200).send({message: `Offer ${offerId} updated!`})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setNearList', auth, async(req,res) => {
    try {
        const {offerId, nearList} = req.body
        const item = await Offer.findOneAndUpdate(
            {_id: offerId, _userId: req.user._id, isArchived: false},
            {near: nearList}
        ) 
        return res.status(200).send({message: `Offer ${item._id} updated!`})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/setDescription', auth, async(req,res) => {
    try {
        const {description} = req.body;
        let descriptions = []
        let sourceLanguage = '';
        for(let i in LANGS){
            if(sourceLanguage !== LANGS[i]){
                let translated = await translate({
                    free_api: true,
                    text: description,
                    target_lang: LANGS[i],
                    auth_key: process.env.DEEPL,
                })
                let translations = translated.data.translations[0];
                sourceLanguage = translations.detected_source_language
                descriptions.push({
                    lang: LANGS[i],
                    text: translations.text
                })
            }else{
                let inList = descriptions.findIndex(e=>e.lang === sourceLanguage)
                if(inList < 0){
                    descriptions.push({
                        lang: LANGS[i],
                        text: description
                    })
                }
            }
        }
        const item = await Offer.findOneAndUpdate(
            {_id: req.body.offerId, _userId: req.user._id, isArchived: false},
            {description: descriptions}
        ) 
        return res.status(200).send({message: `Offer ${item._id} updated!`, descriptions})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

router.post('/deleteOffer', auth, async(req,res) => {
    try {
        const {offerId} = req.body
        const item = await Offer.findOneAndUpdate(
            {_id: offerId, _userId: req.user._id, isArchived: false},
            {isArchived: true}
        ) 
        return res.status(200).send({message: `Offer ${item._id} deleted!`})
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
})

module.exports = router;