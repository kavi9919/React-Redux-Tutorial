import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 0
};
const numberSlice = createSlice(
    {
        name: "number",
        initialState,
        reducers:{
            increment: (state ,action) => {
                state.number += 1;
            },
            decrement: (state, action) => {
                state.number -= 1;
            },
        }
    }
);
export const {increment, decrement} = numberSlice.actions;
export default numberSlice.reducer;