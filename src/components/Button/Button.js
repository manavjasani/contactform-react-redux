import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className="submit-btn" type="Submit" onClick={props.submitHandler} >Submit</button>
        </div>
    )
}

export default Button;
