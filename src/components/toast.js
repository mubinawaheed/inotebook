
import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMsg = (props) => {

    return (
        <>
            {props.f}
            <ToastContainer />
        </>
    )
}

export default ToastMsg;
