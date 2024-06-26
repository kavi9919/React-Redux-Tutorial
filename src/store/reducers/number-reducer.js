import { numberActionTypes } from "../types/number-action-type";

const defaultState={
    number :5
} 

//reducer
/*
const reducer = (state=defaultState , action) =>{
    if(action.type === 'increment'){
        return{
            number: state.number + action.payload,
        }
    }
    if(action.type === 'decrement'){
        return {
            number:state.number - action.payload,
        }
    }
    return state;
} */

    const reducer = (state=defaultState , action) =>{
        switch(action.type){
            case numberActionTypes.INC : return {number : state.number+ action.payload}
            case numberActionTypes.DEC : return {number : state.number - action.payload}
        }
        return state;
    }

export default reducer;