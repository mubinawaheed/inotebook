const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')

const { body, validationResult } = require('express-validator');

//writing checks in the form of array
router.get('/', [body('email', 'enter valid email').isEmail(),
    body('name', 'enter valid name').isLength({ min: 3 }), body('password').isLength({ min: 5 })
], async(req, res) => {

    req.body = {
        name: "emily",
        email: "emilycooper@gmail.com",
        password: "emilyinparis"
    }


    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "email already exists" })
        }


        const salt = await bcrypt.genSalt(10)
        const secure_password = await bcrypt.hash(req.body.password, salt)


        user = await User.create({
                name: req.body.name,
                password: secure_password,
                email: req.body.email
            })
            // .then(user => res.json(user))
            // .catch(err => {
            //     console.log(err)
            //     res.json({ error: "please enter valid credentilas", message: err.message })
            // })
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
});
module.exports = router;