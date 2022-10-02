import React from 'react'
import { useContext } from 'react'
import note_context from '../context/notes/notes_Context'
import NoteItem from './NoteItem'


const Notes_Component = () => {

  const context = useContext(note_context)
  const { notes, addnote } = context

  return (
    <>
      <div>
        <h3>Your Notes</h3>

        <div className="row">
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} />
          })}
        </div>

      </div>

    </>
  )
}

export default Notes_Component
