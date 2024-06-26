import React from 'react'
import { useSelector } from 'react-redux'

const NumberCount = () => {
    const number =useSelector(store=>store.numberSlice.number)
  return (
    <h1>NumberCount is {number} </h1>
  )
}

export default NumberCount