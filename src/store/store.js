import { configureStore } from "@reduxjs/toolkit";
import submitReducer from "./reducers/reducer";



const store = configureStore({
    reducer: {
        submitHandler: submitReducer
    },
    devTools: true
})

export default store;


