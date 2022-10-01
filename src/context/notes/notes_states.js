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
          "_id": "6335a4c197dd6658dd24405e",
          "user": "6334830b2470e652f4b25f7e",
          "title": "Pro Tip",
          "description": "wake up early, it increases your productivity",
          "tag": "personal",
          "date": "2022-09-29T13:59:29.304Z",
          "__v": 0
        },
        {
          "_id": "6335a4d297dd6658dd244060",
          "user": "6334830b2470e652f4b25f7e",
          "title": "Pro Tip",
          "description": "wake up early, it increases your productivity",
          "tag": "personal",
          "date": "2022-09-29T13:59:46.139Z",
          "__v": 0
        },
        {
          "_id": "6335a4d297dd6658dd244060",
          "user": "6334830b2470e652f4b25f7e",
          "title": "Pro Tip",
          "description": "wake up early, it increases your productivity",
          "tag": "personal",
          "date": "2022-09-29T13:59:46.139Z",
          "__v": 0
        },
        {
          "_id": "6335a4d297dd6658dd244060",
          "user": "6334830b2470e652f4b25f7e",
          "title": "Pro Tip",
          "description": "wake up early, it increases your productivity",
          "tag": "personal",
          "date": "2022-09-29T13:59:46.139Z",
          "__v": 0
        }
      ]

      const [notes, setnotes]=useState(initial_notes)

    return (
        <note_context.Provider value={{notes, setnotes}} >
            {props.children}
        </note_context.Provider>
    )
}


export default Note_state;