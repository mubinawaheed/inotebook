const express = require('express')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Notes = require('../models/Notes');
const {
    body,
    validationResult
} = require('express-validator');

router.get('/fetchnotes', fetchuser, async(req, res) => {
    try {
        const notes = await Notes.find({
            user: req.user.id
        })
        res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }


});

//route for adding notes
router.get('/addnotes', fetchuser, [body('title', 'title cannot be empty').isLength({
        min: 3
    }),
    body('description', 'enter correct descriptiion').isLength({
        min: 5
    })
], async(req, res) => {
    req.body = {
        title: "My note",
        description: "learn MERN",
        tag: "academic"
    }
    try {

        const {
            title,
            description,
            tag
        } = req.body

        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const note = new Notes({ title, description, tag, user: req.user.id })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
});

module.exports = router;