import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addStudents} from '../actions/students'


const AddStudents = () => {

   const dispatch = useDispatch()
   const count = useSelector(state => state.count)
   const clickedAddStudents = useSelector(state => state.clickedAddStudents)


    // add the list of students from data/students to the global state
    // show the current student count

    
  return (
    <>
      Add Students 
      <br />

      <h3>Current Student Count: {count}</h3>

      {(!clickedAddStudents || count === 0) ? 
      <button onClick={() => dispatch(addStudents())}>Add Students</button> :
      <p style = {{color: "green"}}>Student has been added!</p>}
      

    </>
  )
}

export default AddStudents
