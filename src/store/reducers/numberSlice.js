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
        }
    }
)