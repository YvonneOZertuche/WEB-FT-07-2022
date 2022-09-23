import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteStudentById} from '../actions/students'

const DeleteStudentByID = ({studentObj}) => {
  //Delete student by and ID

  const dispatch = useDispatch()
    
  return (
    <>
      <li key={studentObj.id}>  {studentObj.id}
      
      &nbsp;&nbsp;

      <a href="#" onClick={()=>dispatch(deleteStudentById(studentObj.id))}>X</a>
      
      </li>
      Delete Student By ID
    </>
  )
}

export default DeleteStudentByID
