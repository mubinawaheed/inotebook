const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

//writing checks in the form of array, creating a user
router.get('/', [body('email', 'enter valid email').isEmail(),
    body('name', 'enter valid name').isLength({ min: 3 }), body('password').isLength({ min: 5 })
], async(req, res) => {

    JWT_secretkey = 'we were on a break';
    req.body = {
        name: "hashir",
        email: "hashir@gmail.com",
        password: "startrek"
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
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_secretkey);
        console.log(authtoken)
        res.json({ authtoken: authtoken, user: user })

        // .then(user => res.json(user))
        // .catch(err => {
        //     console.log(err)
        //     res.json({ error: "please enter valid credentilas", message: err.message })
        // })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
});

//authenticating a user
router.post('/', [body('email', "enter a valid email").isEmail(), body('password', 'password cannot be blank').exists()], async(res, req) => {
    try {
        const login_errors = validationResult(body.req);
        if (!login_errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const email = req.body.email;
        const password = req.body.password;
        console.log(email, password)

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Enter correct credentials" })
        }
        const password_Compare = await bcrypt.compare(password, user.password)
        if (!password_Compare) {
            return res.status(400).json({ error: "Enter correct credentials" })

        }
        const payload = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_secretkey);

        res.json({ authtoken: authtoken, user: user })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error occured")
    }
})
module.exports = router;