import React, { useState } from "react";
import note_context from "./notes_Context";

const Note_state = (props) => {

  const host = "http://localhost:5500"
  const initial_notes = []

  const [notes, setnotes] = useState(initial_notes)

  const getnotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')},
    });
    const json = await response.json()
    setnotes(json)
  }
 
  //add a note
  const addnote = async (title, tag, description) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')},
      body: JSON.stringify({ title, tag, description })
    });
    const json = await response.json();
    const note = json
    setnotes(notes.concat(note))
    console.log(notes)
  }

  //delete note
  const deletenote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')},
      // body: JSON.stringify({title, tag, description})
    });
    const json = await response.json();
    console.log(json)
    // console.log('deleting' + id)
    const newnotes = notes.filter((note) => {
      return note._id !== id
    })
    setnotes(newnotes)
  }
  
  // update note
  const EditNote = async (title, tag, description, id) => {
    
    // fetching existing content
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')  
      },
      body: JSON.stringify({ title, tag, description, id })
    });
    const json = await response.json();
    
    //code to edit in client
    let new_note=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < new_note.length; index++) {
      const element = new_note[index];
      if (element._id === id) {
        new_note[index].title = title
        new_note[index].tag = tag
        new_note[index].description = description
        break
      }
    }
    setnotes(new_note)

  }

  return (
    <note_context.Provider value={{ notes, setnotes, addnote, deletenote, EditNote, getnotes }} >
      {props.children}
    </note_context.Provider>
  )
}


export default Note_state;