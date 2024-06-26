import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/reducers/numberSlice'
import NumberCount from './components/NumberCount'
import { addBrands } from './store/reducers/coumputerSlice'

function App() {
  const number =useSelector(store =>store.numberSlice.number); //get the state from the store
  const brands =useSelector(store => store.laptopSlice.brands)
  const dispatch =useDispatch(); //dispatch (setState) the action to the store
  const computerRef =useRef(null);
  return (
    <>
      <div>
        <h1>{number}</h1>
        <br />
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
      <NumberCount/>
      <input type="text" placeholder='Enter Laptop Name ' ref={computerRef} />
      <button onClick={()=>dispatch(addBrands(computerRef.current.value))}>Enter</button>
    </>
  )
}

export default App
