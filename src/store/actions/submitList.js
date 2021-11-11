import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const submitAction = createAsyncThunk('submitHandler', async (obj) => {
        console.log(obj)

        const response = await axios.post('https://contact-list-3fa22-default-rtdb.firebaseio.com/condata.json', obj);
        const resData = await response.data;
        console.log(resData);

        console.log("GET_LIST", response);
      
        return response.data;
      }
);

export const updateAction = createAsyncThunk('updateHandler', async(obj) => {
      console.log('updateobj', obj);

      const response = await axios.put(`https://contact-list-3fa22-default-rtdb.firebaseio.com/condata/${obj.id}.json`, obj.data);
      const resData = await response.data;
        console.log(resData);

        
        console.log("UPDATE_LIST", response);

      return response.data;
})
