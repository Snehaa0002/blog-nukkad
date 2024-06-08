const express = require('express');
const router = express.Router();
const Model = require('../models/blogModel');


router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) res.status(200).json(result);
            else res.status(400).json({ message: 'login failed' })
        }).catch((err) => {
            res.status(500).json(err);
        });
})

//getall
router.get('/getall', (req, res) => {
    Model.find().populate('user')
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json();
        });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id).populate('user')
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json();
        });
});

router.get('/getbyuser/:id', (req, res) => {
    console.log(req.params.id);
    Model.find({user : req.params.id})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json();
        });
});



module.exports = router;
