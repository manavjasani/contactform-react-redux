import React from 'react';
import Form from '../Form/Form';
import "./Modal.css";

const Modal = (props) => {
    console.log(props);

    return (
        <div className="Modal">
            <h1>Contact-Edit</h1>
            <Form data={props.data} />
            <div className="backDrop"></div>
        </div>
    )
}

export default Modal;