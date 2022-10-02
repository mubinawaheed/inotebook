import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoteItem = (props) => {

    const { title, description, date } = props.note
    const stile = {
        width: "18rem"
    }
    const icon = {
        cursor:"pointer",
        fontSize: "1.5rem"
    }
  
    const f = () => {

        document.getElementById("deletebtn").cursor='none';
        
        toast.success("Deleted", { position: toast.POSITION.TOP_CENTER, autoClose:2000 })
        document.getElementById("deletebtn").cursor="pointer";
    }

    const newdate = new Date(date);
    
    return (
        <div className='col-md-3 mx-3 my-3'>
            <div className="card my-2" style={stile}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5><hr />
                    <h6 className="card-subtitle mb-2 text-muted">{newdate.toISOString().replace(/T/, ' ').replace(/\..+/, '')}</h6>
                    <p className="my-3 card-text">{description}</p>
                    <i className="mx-2 fa-regular fa-pen-to-square" style={icon}></i>
                    <i className="mx-2 my-2 fa-sharp fa-solid fa-trash-can" id="deletebtn" onClick={f} style={icon}></i>
                    <ToastContainer/>
                </div>
            </div>
            
        </div>
    )
}

export default NoteItem
