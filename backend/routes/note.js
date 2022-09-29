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
        console.log(notes)
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
        title: "Pro Tip",
        description: "wake up early, it increases your productivity",
        tag: "personal"
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

        console.log(savedNote)
        res.json(savedNote)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
});



//add route for updating note

router.get('/updatenote/:id', fetchuser, async(req, res) => {
    try {
        req.body = {
            title: "New Pro Tip",
            description: "wake up early, it increases your productivity [updated",
            tag: "personal note"
        }
        const {
            title,
            description,
            tag
        } = req.body

        const newnote = {};
        if (title) {
            newnote.title = title
        }
        if (tag) {
            newnote.tag = tag
        }
        if (description) {
            newnote.description = description
        }
        //find the note to be updated
        let updated_note = await Notes.findById(req.params.id)

        if (!updated_note) {
            return res.status(404).send("Note not found")
        }
        if (updated_note.user.toString() !== req.user.id) {
            return res.status(404).send("unauthorized user")
        }
        updated_note = await Notes.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })
        res.json(updated_note)

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
});


//route for deleting a note:
router.get("/deletenote/:id", fetchuser, async(req, res) => {
    try {
        req.body = {
            title: "New Pro Tip",
            description: "wake up early, it increases your productivity [updated",
            tag: "personal note"
        }

        //finding the note to be deleted
        let note = await Notes.findById(req.params.id)

        if (!note) {
            return res.status(404).send("no note to be deleted")
        }


        if (req.user.id !== note.user.toString()) {
            return res.status(401).send("unauthorized user")
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted" })


    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
})
module.exports = router;