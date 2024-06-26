import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

const NumberCount = () => {
    const number =useSelector(store=>store.numberSlice.number)
    const brands =useSelector(store => store.laptopSlice.brands)
  return (
    <div>
        <h1>Computer brand is {brands} </h1>
    </div>
  )
}

export default NumberCount
