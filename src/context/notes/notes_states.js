import React from "react";
import note_context from "./notes_Context";

const Note_state = (props) => {

    const state={
        "name":"mubina"
    }
    return (
        <note_context.Provider value={state} >
            {props.children}
        </note_context.Provider>
    )
}


export default Note_state;