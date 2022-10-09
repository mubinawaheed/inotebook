import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import note_context from '../context/notes/notes_Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addnote = () => {
    const mystile = {
        width: "50%"
    }
    const context = useContext(note_context)
    const { addnote } = context
    const [note, setnote] = useState({ title: '', description: '', tag: '' })

    const handleclick = (e) => {
        e.preventDefault()
        addnote(note.title,  note.tag,note.description)
        setnote({ title: '', description: '', tag: '' })
        toast.success("Note Added", { position: toast.POSITION.TOP_CENTER, autoClose: 500 })
        
    }

    const OnChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (

        <>
            <div className="container my-3">
                <h2 className="my-3">Add a Note</h2>
                <form className="my-3" autoComplete='new-password'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label" >
                            Title
                        </label>
                        <input
                            style={mystile}
                            type="text"
                            required
                            className="form-control"
                            id="title"
                            name='title'
                            onChange={OnChange}
                            value={note.title}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <input

                            style={mystile}
                            type="text"
                            required
                            className="form-control"
                            id="description"
                            value={note.description}
                            name='description'
                            onChange={OnChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">
                            Tag
                        </label>
                        <input
                            style={mystile}
                            type="text"
                            className="form-control"
                            id="tag"
                            value={note.tag}
                            required
                            name='tag'
                            onChange={OnChange}
                        />
                    </div>

                   
                    <button type="submit" onClick={handleclick} className="btn btn-primary">
                        Add Note
                    </button>
                    <ToastContainer/>
                </form>
            </div>
        </>
    )
}

export default Addnote
