import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ColorPicker = () => {

  const navigate = useNavigate()

    useEffect(() => {
      document.title = 'Color Picker'
    })

    const handleClick = () => {
      navigate('/')
    }

  return (
    <>
      
      <h1>Color Picker</h1>

      <button onClick={handleClick}>Home</button>
     
    </>
  )
}

export default ColorPicker
