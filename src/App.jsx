import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/reducers/numberSlice'
import NumberCount from './components/NumberCount'

function App() {
  const number =useSelector(store =>store.numberSlice.number)
  const dispatch =useDispatch();
  return (
    <>
      <div>
        <h1>{number}</h1>
        <br />
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
      <NumberCount/>
    </>
  )
}

export default App
