import React from 'react'
const NoteItem = (props) => {

    const { title, description } = props.note
    const stile={
        width: "18rem"
    }
    return (
        <div className='col-md-3 mx-4'>
            <div className="card my-3" style={stile}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default NoteItem
