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
    return (
        <note_context.Provider value={{}} >
            {props.children}
        </note_context.Provider>
    )
}


export default Note_state;