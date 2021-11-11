import { createSlice } from "@reduxjs/toolkit";

// export const submitDataSlice = createSlice({
//         name: 'update',
//         initialState,
//         reducers: {
//             submitPost: (state, action) => {
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
        }
    }
})

export const { submitPost } = submitDataSlice.actions;

export default submitDataSlice.reducer;