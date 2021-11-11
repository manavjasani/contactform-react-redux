import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div>
            <button className="submit-btn" type="Submit" onClick={props.submitHandler} disabled={props.disable} >Submit</button>
        </div>
    )
}

export default Button;
