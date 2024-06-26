import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count : 0,
    brands:[]
}

const laptopSlice = createSlice({
    name :'laptop',
    initialState,
    reducers:{
        addLaptop:(state,action) => ({
           count:state.count += 1
        }),
        removeLaptop:(state,action) => ({
            count:state.count -= 1
        }),
    }
});

export default laptopSlice.reducer;
export const {addLaptop,removeLaptop} = laptopSlice.actions;