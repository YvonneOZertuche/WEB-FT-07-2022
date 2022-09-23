import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addStudentInOrder, sortStudentsAlpha } from '../actions/students'

//add an item in alphabetical order (not to the end of the list)

const AddItemInOrder = () => {

  const dispatch = useDispatch()
  const [fName, setfName] = useState("")
  const [city, setCity] = useState("")

    const handleStudentSubmit = (e) => {
      e.preventDefault();
  
      dispatch(addStudentInOrder(uuidv4(), fName, city));
      dispatch(sortStudentsAlpha());
  
      setfName("");
      setCity("");

  }
   
  return <>
    Add Item In Order
    <form onSubmit={handleStudentSubmit}>
      <input
        type='text'
        placeholder='First Name'
        value={fName}
        onChange={e => setfName(e.target.value)}
      />

      <input
        type={'text'}
        placeholder='City'
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <input type='submit' />
    </form>

  </>;
}

export default AddItemInOrder
