const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const { body, validationResult } = require('express-validator');

//writing checks in the form of array, creating a user
router.get('/createuser', [body('email', 'enter valid email').isEmail(),
    body('name', 'enter valid name').isLength({ min: 3 }), body('password').isLength({ min: 5 })
], async(req, res) => {

    JWT_secretkey = 'we were on a break';
    req.body = {
        name: "hina",
        email: "hina@gmail.com",
        password: "hina76"
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
router.get('/login', [body('email', "enter a valid email").isEmail(), body('password', 'password cannot be blank').exists()], async(req, res, next) => {
    try {
        JWT_secretkey = 'we were on a break';

        req.body = {

            email: "hashir@gmail.com",
            password: "startrek"
        }
        const login_errors = validationResult(req.body);
        if (!login_errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const email = req.body.email;
        const password = req.body.password;
        console.log(email, password)

        let user = await User.findOne({ email });
        if (!user) {
            console.log("in line 83")
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
        const authtoken = jwt.sign(payload, JWT_secretkey);
        res.json({ authtoken: authtoken, name: user.name, message: "Logged in successfully" })
        next()
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
});

//get logged in user details

//fetchuser is a middleware; it is used wherever login is required, after successful completion of fectuser function the next function function after that runs
router.get('/getuser', fetchuser, async(req, res) => {

    try {
        // req.get('auth-token') = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNDZlZmJiOTc4ZTc5ODczNjA2YzVlIn0sImlhdCI6MTY2NDQzOTI2OH0.D05vBUwBJmo205OHu1X5Tg37XNs0JgJ2_MKMCtFdHfk"

        const userid = req.user.id;
        const user = await User.findById(userid).select('-password')
        res.send(user)

    } catch (error) {

        console.error(error.message)
        res.status(500).send("Some error occured")
    }
})
module.exports = router;