import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../index.css'


let buttons = ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']




const Buttons = () => {
 
  return (
    <div className="display">
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




