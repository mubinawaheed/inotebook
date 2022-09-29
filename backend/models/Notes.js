const mongoose = require('mongoose')
const { Schema } = mongoose


const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        //adding a reference model
        ref: 'user'
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('notes', NotesSchema)