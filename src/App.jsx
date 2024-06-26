import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { numberActionTypes } from './store/types/number-action-type'

function App() {
  const number = useSelector((store) => store.number);
  const dispatch =useDispatch();  //dispatch  = setState  payload = data

  const numberIncrement =(payload)=>({
    type :numberActionTypes.INC,
    payload :payload
  })
  const numberDecrement =(payload)=>({
    type :numberActionTypes.DEC,
    payload :payload
  })
  return (
    <>
       {number}
       <div>
        <button onClick={()=>dispatch(numberIncrement(1))}>Increment</button>

        <button onClick={()=>dispatch(numberDecrement(1))}>Decrement</button>
       </div>
    </>
  )
}

export default App
