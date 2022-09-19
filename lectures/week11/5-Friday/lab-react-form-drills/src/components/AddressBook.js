import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const AddressBook = () => {

  const navigate = useNavigate()

    useEffect(() => {
    document.title = 'Address Book'
  })

  const handleClick = () => {

    navigate('/')
  }

  return (
    <>
      
      

      
          <h1> Address Book </h1>

          <br />
          <br />
          <button onClick={handleClick}>Home</button>
          <br />
          <br />
     

      
    </>
  )
}

export default AddressBook
