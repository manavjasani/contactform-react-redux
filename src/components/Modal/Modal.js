import React from 'react';
// import Button from '../Button/Button';
import Form from '../Form/Form';
import "./Modal.css";
// import axios from 'axios';

const Modal = (props) => {
    console.log(props);

    return (
        <div className="Modal">
            <h1>Contact-Edit</h1>
            <Form data={props.data} />
            {/* <Button submitHandler={updateChangeHandler} /> */}
            <div className="backDrop"></div>
        </div>
    )
}

export default Modal;