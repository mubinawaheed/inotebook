import React from 'react'


const NoteItem = (props) => {

    const { title, description,date } = props.note
    const stile={
        width: "18rem"
    }
    const newdate=new Date(date);
    return (
        <div className='col-md-3 mx-3 my-3'>
            <div className="card my-2" style={stile}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5><hr/>
                    <h6 className="card-subtitle mb-2 text-muted">{newdate.toISOString().replace(/T/, ' ').replace(/\..+/, '')}</h6>
                    <p className="card-text">{description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default NoteItem
