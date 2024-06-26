import { configureStore } from "@reduxjs/toolkit";
import numberSliceReducer from "./reducers/numberSlice";
import laptopSliceReducer from "./reducers/coumputerSlice";


const store = configureStore({
    reducer: {
        numberSlice :numberSliceReducer,
        laptopSlice :laptopSliceReducer
    }
})

export default store;