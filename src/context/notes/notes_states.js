import React, { useState } from "react";
import note_context from "./notes_Context";

const Note_state = (props) => {
    // let initial_state = {
    //     "name": "mubina"
    // }
    // const [state, setState] = useState(initial_state)

    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //             "name": "Samra"
    //         })

    //     }, 2000);
    // }
    const initial_notes=[
      
        {
          "_id": "6335a4d297dd6658dd24460",
          "user": "6334830b2470e652f4b25f7e",
          "title": "Pro Tip",
          "description": "wake up early, it increases your productivity. Maintain a healthy routine and live a healthy life",
          "tag": "personal",
          "date": "2022-09-29T13:59:46.139Z",
          "__v": 0
        },
        {
          "_id": "6335a4d297dd6658d24060",
          "user": "6334830b2470e652f4b25f7e",
          "title": "Pro Tip",
          "description": "wake up early, it increases your productivity. Read some books and enjoy your coffee",
          "tag": "personal",
          "date": "2022-09-29T13:59:46.139Z",
          "__v": 0
        },
        {
          "_id": "6335a4d297dd6658dd2406",
          "user": "6334830b2470e652f4b25f7e",
          "title": "Pro Tip",
          "description": "wake up early, it increases your productivity. binge watch some kdramas and eat ramen",
          "tag": "personal",
          "date": "2022-09-29T13:59:46.139Z",
          "__v": 0
        }
      ]

      const [notes, setnotes]=useState(initial_notes)

      //add a note
      const addnote=(title, tag, description)=>{
        const note={
          "_id": "6658dd2406777",
          "user": "6334830b2470e652f4b25f7e",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-09-29T13:59:46.139Z",
          "__v": 0
        };
        setnotes(notes.concat(note))
        console.log(notes)
      }

      //delete note
      const deletenote=()=>{

      }

      // update note
      const updatenote=()=>{

      }

    return (
        <note_context.Provider value={{notes, setnotes, addnote, deletenote, updatenote}} >
            {props.children}
        </note_context.Provider>
    )
}


export default Note_state;