const express = require('express');
const router = express.Router();
const User = require('../models/User');

const { validationResult, check } = require('express-validator');


router.get('/', (req, res) => {
    req.body = {
        name: "sara",
        email: "sara@gmail.com",
        password: 'none'
    }
    console.log(req.body)
    const user = User(req.body)
    user.save();
    res.send(req.body)
});
module.exports = router;