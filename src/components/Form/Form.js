import React, { useState } from 'react';
import "./Form.css";
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { submitAction, updateAction } from '../../store/actions/submitList';

const Form = ({data}) => {
    // console.log(props.data);
    // const {id} = props.data;
    // console.log(data)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nameVal, setNameVal] = useState(data ? data.data.name : '');
    const [nameError, setNameError] = useState('');
    const [emailVal, setEmailVal] = useState(data ? data.data.email : '');
    const [emailError, setEmailError] = useState('');
    const [ageVal, setAgeVal] = useState(data ? data.data.age : '');
    const [ageError, setAgeError] = useState('');
    const [contactVal, setContactVal] = useState(data ? data.data.contact : '');
    const [contactError, setContactError] = useState('');
    

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

        formValidate();
        if(formValidate()) {
            // console.log('true');
            dispatch(submitAction({
                name: nameVal,
                email: emailVal,
                age: ageVal,
                contact: contactVal
            }))
            navigate('/listpage')
            alert('Successfully Added !');
            setNameVal('');
            setEmailVal('');
            setAgeVal('');
            setContactVal('');
        }
        
        // console.log(nameVal,emailVal, ageVal, contactVal );
    //     axios.post('https://contact-list-3fa22-default-rtdb.firebaseio.com/condata.json', {
    //             name: nameVal,
    //             email: emailVal,
    //             age: ageVal,
    //             contact: contactVal
    //         }
    //     ).then(res => {
    //         console.log('new', res)
    //         alert('Successfully Added !');
    //         setNameVal('');
    //         setEmailVal('');
    //         setAgeVal('');
    //         setContactVal('');
    //         navigate('/listpage');
    //     }).catch(err => {
    //         console.log(err)
    //         alert('Fail to upload !');
    //     });
    }

    const updateChangeHandler = () => {
        // axios.put(`https://contact-list-3fa22-default-rtdb.firebaseio.com/condata/${data.id}.json`, {
        //     name: nameVal,
        //     email: emailVal,
        //     age: ageVal,
        //     contact: contactVal
        // }).then(res => {
        //     console.log('update', res)
        //     alert('Successfully Updated !')
        //     setNameVal('');
        //     setEmailVal('');
        //     setAgeVal('');
        //     setContactVal('');
        //     navigate('/listpage')
        // }).catch(err => {
        //     alert('Update Failed !')
        //     console.log(err)
        // });
        
        formValidate();
        if (formValidate()) {
            dispatch(updateAction({data: {
                name: nameVal,
                email: emailVal,
                age: ageVal,
                contact: contactVal
            }, id: data.id}))
            navigate('/')
            alert('Successfully Updated !')
            setNameVal('');
            setEmailVal('');
            setAgeVal('');
            setContactVal('');
        }
    }

    const formValidate = () => {
        let isValid = false;

        if (!nameVal) {
            setNameError('Name is require !')
        } else if (!emailVal) {
            setEmailError('Email is require !')
        } else if (!ageVal) {
            setAgeError('Age is require !')
        } else if (!contactVal) {
            setContactError('Contact is require !')
        } else {
            isValid = true;
        }
        return isValid;
    }
    // let disable = true;

    // let formValid = "";

    // if(!data && isValid) {
    //     formValid = <Button submitHandler={submitHandler} />
    // } else if (data) {
    //     formValid = <Button submitHandler={updateChangeHandler} />
    // } else if (!isValid) {
    //     formValid = <Button submitHandler={submitHandler} disable="true" />
    // }
        
    return (
        
        <div>
            <div className="form-child">
                <input type="text" placeholder="Enter Your Name" value={nameVal} onChange={nameChangeHandler} required />
                {nameError && <span>{nameError}</span>} 
                <input type="email" placeholder="Enter Your Email" value={emailVal} onChange={emailChangeHandler} required />
                {emailError && <span>{emailError}</span>}
                <input type="number" placeholder="Age" value={ageVal} onChange={ageChangeHandler} required />
                {ageError && <span>{ageError}</span>}
                <input type="text" placeholder="Contact Number" value={contactVal} onChange={contactChangeHandler} required />
                {contactError && <span>{contactError}</span>}
                {!data ?  <Button submitHandler={submitHandler} /> : <Button submitHandler={updateChangeHandler} />}
            </div>
        </div>
    )
}

export default Form; 
