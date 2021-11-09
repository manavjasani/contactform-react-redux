import React from 'react';
import { Link } from 'react-router-dom';
import "./Link.css";

const LinkButton = () => {
    return (
        <div className="link-cont">
            <Link className="active link" to="/">HomePage</Link>
            <Link className="link" to="/listpage">List-Page</Link>      
        </div>
    )
}

export default LinkButton;