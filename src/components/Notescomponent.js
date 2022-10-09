import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useContext } from 'react'
import note_context from '../context/notes/notes_Context'
import NoteItem from './NoteItem'


const Notes_Component = () => {

  const mystile = {
    width: "70%"
  }
  const [note, setnote] = useState({ etitle: '', etag: '', edescription: '', id: "" })

  const context = useContext(note_context)
  const { notes, getnotes, EditNote } = context


  //for save changes button
  const refClose = useRef('')
  const handleclick = (e) => {
    EditNote(note.etitle, note.etag, note.edescription, note.id)
    refClose.current.click()
  }

  const OnChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }

  // to fill the contents of modal
  const ref = useRef('')
  const updatenote = (currentote) => {
    ref.current.click()
    setnote({ id: currentote._id, etitle: currentote.title, edescription: currentote.description, etag: currentote.tag })
  }

  useEffect(() => {
    getnotes()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div>
        <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" 
        aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit your note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label" >Title </label>
                    <input style={mystile} type="text" value={note.etitle}
                      className="form-control" id="etitle" name='etitle' onChange={OnChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description </label>
                    <input value={note.edescription} style={mystile} type="text" className="form-control"
                      id="edescription"
                      name='edescription'
                      onChange={OnChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag</label>
                    <input
                      style={mystile} value={note.etag} type="text" className="form-control" id="etag" name='etag' onChange={OnChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={handleclick} className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <h3>Your Notes</h3>
        <div className="row">
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} updatenote={updatenote} />
          })}
        </div>

      </div>

    </>
  )
}

export default Notes_Component
