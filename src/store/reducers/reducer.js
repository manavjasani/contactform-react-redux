import { createSlice } from "@reduxjs/toolkit";
import { submitAction, updateAction, deleteAction } from "../actions/submitList";

// const startState = {

// }

// export const updateDataSlice = createSlice({
//         name: 'updateHandler',
//         startState,
//         reducers: {
//             updatePost: (state, action) => {
//                 state.contactForm = action.payload
//             }
//         }
//     })

const initialState = {
    contactForm: null,
    status: false,
    error: null
}

export const submitDataSlice = createSlice({
    name: 'submitHandler',
    initialState,
    extraReducers: {
        [submitAction.fullfilled]: (state, action) => {
            state.contactForm = action.payload
        },
        [submitAction.rejected]: (state, action) => {
            state.error = action.payload
        },
        [updateAction.fullfilled]: (state, action) => {
            state.contactForm = action.payload
        },
        [updateAction.rejected]: (state, action) => {
            state.error = action.payload
        },
        [deleteAction.fullfilled]: (state, action) => {
            state.contactForm = action.payload
        },
        [deleteAction.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

// export const { submitPost, updatePost, deletePost } = submitDataSlice.actions;

export default submitDataSlice.reducer;