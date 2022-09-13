import React from 'react'
import '../index.css'

const Buttons = () => {
  let buttons = ['AC','+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6','1','2','3', '+', '0', '.', '='
  ]

  return (
    <div>
      Buttons
      <div>
        {buttons.map(button => (
          <option value='{button}'>{button}</option>
        ))}
      </div>
    </div>
  )
}

export default Buttons

