import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitAction = createAsyncThunk('submitHandler', async (obj) => {
        console.log(obj)

        const response = await axios.post('https://contact-list-3fa22-default-rtdb.firebaseio.com/condata.json', obj);
        const resData = await response.data;
        console.log(resData);

        
        // if(response.status === 200) alert('Successfully Added !');
        //     setNameVal('');
        //     setEmailVal('');
        //     setAgeVal('');
        //     setContactVal('');
        //     navigate('/listpage');
        // }).catch(err => {
        //     console.log(err)
        //     alert('Fail to upload !');
        // });
        console.log("GET_LIST", response);
      
        return response.data;
      }
    // axios.post('https://contact-list-3fa22-default-rtdb.firebaseio.com/condata.json', {
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
) 
