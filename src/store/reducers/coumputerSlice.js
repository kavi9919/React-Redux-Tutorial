import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count : 0,
    brands:'MSI'
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
        addBrands:(state ,action)=>({
            brands:action.payload
        })
    }
});

export default laptopSlice.reducer;
export const {addLaptop,removeLaptop ,addBrands} = laptopSlice.actions;