import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import note_context from '../context/notes/notes_Context'

const Addnote = () => {
    const mystile = {
        width: "50%"
    }
    const context = useContext(note_context)
    const { addnote } = context
    const [note, setnote] = useState({ title: '', description: '', tag: 'default' })

    const handleclick = (e) => {
        e.preventDefault()
        addnote(note.title,  note.tag,note.description)
    }

    const OnChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (

        <>
            <div className="container my-3">
                <h2 className="my-3">Add a Note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label" >
                            Title
                        </label>
                        <input
                            style={mystile}
                            type="text"
                            className="form-control"
                            id="title"
                            name='title'
                            onChange={OnChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <input

                            style={mystile}
                            type="text"
                            className="form-control"
                            id="description"
                            name='description'
                            onChange={OnChange}
                        />
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" onClick={handleclick} className="btn btn-primary">
                        Add Note
                    </button>
                </form>
            </div>
        </>
    )
}

export default Addnote
