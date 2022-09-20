import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const AddressBook = () => {

  const [contact, setContact] = useState({})
  const [inputName, setInputName]= useState('')
  const [inputMail, setInputMail] = useState('')
  const [inputNumber, setInputNumber] = useState()

  const navigate = useNavigate()

    useEffect(() => {
    document.title = 'Address Book'
  })

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleClick = () => {

    navigate('/')
  }

  return (
    <>
          <h1> Address Book </h1>

          <form onSubmit={handleSubmit}>

            <h5>Add a New Contact</h5>

         
           <input placeholder='Name' type='text' value={inputName} onChange={e => setInputName(e.target.value)} />
           <br />
           
           <br />
           <input placeholder='Email' type='text' value={inputMail} onChange={e => setInputMail(e.target.value)}/>
           <br />

          <input
  placeholder='Phone'
  type='integer'
  value={inputNumber}
  onChange={e => setInputNumber(e.target.value)}
/>



          
          
          
          
          
          
          
          
          
          <br />
          <br />
          <button onClick={handleClick}>Home</button>
          <br />
          <br />





          </form>

        
     

      
    </>
  )
}

export default AddressBook
