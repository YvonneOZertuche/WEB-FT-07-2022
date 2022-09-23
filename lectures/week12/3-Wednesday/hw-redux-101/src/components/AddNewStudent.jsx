import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import {addNewStudent} from '../actions/students'
import DisplayStudents from './DisplayStudents'



const AddNewStudent = () => {
   const studentList = useSelector(state => state.students)

  const [fName, setfName] = useState('')
  const [city, setCity] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

     dispatch(addNewStudent(uuidv4(),fName, city))

  }   

  return (
    <>
     
      <form onSubmit={e=>handleSubmit(e)}>

        <input type="text" placeholder="Student Name" value={fName} onChange={e=>setfName(e.target.value)}/>

        <input type="text" placeholder="City" value={city} onChange={e=>setCity(e.target.value)}/>

        <br/><br/>

        <input type="submit"/>

      </form>
    
      {/* <ul>
  {studentList.map(studentObj => {
    return (
      <li key={studentObj.id}>
        {studentObj.fName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {studentObj.city}
        &nbsp;&nbsp;
      </li>
    )
  })}
</ul> */}

  <DisplayStudents />
    </>
  )
  
}

export default AddNewStudent
