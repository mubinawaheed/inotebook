import React, { useContext } from 'react'
import note_context from '../context/notes/notes_Context'


export default function About() {
  
  const a = useContext(note_context)
  return (
    <div >
      about {a.name}
    </div>
  )
}
