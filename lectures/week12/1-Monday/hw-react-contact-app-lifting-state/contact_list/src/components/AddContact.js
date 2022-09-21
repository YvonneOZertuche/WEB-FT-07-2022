import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { v4 as uuidv4 } from 'uuid'
import { ButtonToolbar } from 'react-bootstrap'


const AddContact = ({addContactProp}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()

    let newNewContact = {
      id: uuidv4(),
      name,
      email,
      phoneNumber,
      city,
      state,
      zip
    }

    addContactProp(newNewContact)
  }

  return (
    <>

    <h1>Add a New Contact</h1>

    <Form onSubmit={handleSubmit}>

      <br />
        <input
          type='text'
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        {console.log(name)}
     

      <br/><br/>
     
      <Button variant="success" block={"true"} type="submit">
        Submit
      </Button>
      

    </Form>
   

    </>
  )
}

export default AddContact