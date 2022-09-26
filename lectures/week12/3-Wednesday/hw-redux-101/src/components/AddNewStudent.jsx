import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {addStudents} from '../actions/students'
import AddStudents from './AddStudents'


const AddNewStudent = () => {

  const dispatch = useDispatch()
  const [fName, setFName] = useState('')
  const [city, setCity] = useState('')
  const count = useSelector(state => state.count)
  const clickedAddStudents = useSelector(state => state.clickedAddStudents)



  const handleStudentSubmit = (e) => {
    e.preventDefault()

     dispatch(addStudents(uuidv4(),fName, city))

     setFName('')
     setCity('')


  }   

  return (
    <>
      

     
      {/* <form onSubmit={e=>handleSubmit(e)}> */}
      <form onSubmit={handleStudentSubmit}>

        <input type="text" placeholder="Student Name" value={fName} onChange={(e) => setFName(e.target.value)}/>

        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>

        <br/><br/>

        <input type="submit"/>

        <AddStudents />


      </form>

     


      {

  
}

    
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


    </>
  )
  
}

export default AddNewStudent
