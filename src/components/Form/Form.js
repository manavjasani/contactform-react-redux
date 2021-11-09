import React, { useState } from 'react';
import axios from 'axios';
import "./Form.css";
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";

const Form = ({data}) => {
    // console.log(props.data);
    // const {id} = props.data;
    // console.log(data)
    const navigate = useNavigate();
    console.log(navigate);

    const [nameVal, setNameVal] = useState(data ? data.data.name : '');
    const [emailVal, setEmailVal] = useState(data ? data.data.email : '');
    const [ageVal, setAgeVal] = useState(data ? data.data.age : '');
    const [contactVal, setContactVal] = useState(data ? data.data.contact : '');
    

    const nameChangeHandler = (e) => {
        setNameVal(() => e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmailVal(() => e.target.value);
    }

    const ageChangeHandler = (e) => {
        setAgeVal(() => e.target.value);
    }

    const contactChangeHandler = (e) => {
        setContactVal(() => e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(nameVal,emailVal, ageVal, contactVal );

        axios.post('https://contact-list-3fa22-default-rtdb.firebaseio.com/condata.json', {
                name: nameVal,
                email: emailVal,
                age: ageVal,
                contact: contactVal
            }
        ).then(res => {
            console.log('new', res)
            alert('Successfully Added !');
            setNameVal('');
            setEmailVal('');
            setAgeVal('');
            setContactVal('');
            navigate('/listpage');
        }).catch(err => {
            console.log(err)
            alert('Fail to upload !');
        });
    }

    const updateChangeHandler = () => {
        axios.put(`https://contact-list-3fa22-default-rtdb.firebaseio.com/condata/${data.id}.json`, {
            name: nameVal,
            email: emailVal,
            age: ageVal,
            contact: contactVal
        }).then(res => {
            console.log('update', res)
            alert('Successfully Updated !')
            setNameVal('');
            setEmailVal('');
            setAgeVal('');
            setContactVal('');
            navigate('/listpage')
        }).catch(err => {
            alert('Update Failed !')
            console.log(err)
        });
    }

    return (
        <div>
            <div className="form-child">
                <input type="text" placeholder="Enter Your Name" value={nameVal} onChange={nameChangeHandler} />
                <input type="email" placeholder="Enter Your Email" value={emailVal} onChange={emailChangeHandler} />
                <input type="number" placeholder="Age" value={ageVal} onChange={ageChangeHandler} />
                <input type="text" placeholder="Contact Number" value={contactVal} onChange={contactChangeHandler} />
                {!data ?  <Button submitHandler={submitHandler} /> : <Button submitHandler={updateChangeHandler} />}
            </div>
        </div>
    )
}

export default Form; 
