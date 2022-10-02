import React, { useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import note_context from '../context/notes/notes_Context';


const NoteItem = (props) => {

    const context = useContext(note_context)
    const { deletenote } = context

    const { title, description, date } = props.note
    const stile = {
        width: "18rem"
    }
    const icon = {
        cursor: "pointer",
        fontSize: "1.5rem",

    }
    const [iconstyle, seticon] = useState(icon)
    const [disable, setdisable] = useState(false)


    const handledelete = (id) => {

        seticon({
            cursor: 'not-allowed',
            fontSize: "1.5rem"
        })
        setdisable({
            disabled: true
        })
        deletenote(id)

        toast.success("Deleted", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
    }

    const newdate = new Date(date);

    return (
        <div className='col-md-3 mx-3 my-3'>
            <div className="card my-2" style={stile}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5><hr />

                    <h6 className="card-subtitle mb-2 text-muted">{newdate.toISOString().replace(/T/, ' ').replace(/\..+/, '')}</h6>

                    <p className="my-3 card-text">{description}</p>

                    <button className="btn fa-regular fa-pen-to-square" style={iconstyle}></button>

                    <button className="btn fa-sharp fa-solid fa-trash-can" disabled={disable}
                        onClick={() => {
                            handledelete(props.note._id)
                        }} style={iconstyle}></button>

                    <ToastContainer />
                </div>
            </div>

        </div>
    )
}

export default NoteItem
