import { createSlice } from "@reduxjs/toolkit";

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
    reducers: {
        submitPost: (state, action) => {
            state.contactForm = action.payload
        },
        updatePost: (state, action) => {
            state.contactForm = action.payload
        }
    }
})

export const { submitPost, updatePost } = submitDataSlice.actions;

export default submitDataSlice.reducer;