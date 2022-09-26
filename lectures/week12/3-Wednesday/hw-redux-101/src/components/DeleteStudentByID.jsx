import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteStudentByID} from '../actions/students'

//Delete student by and ID

const DeleteStudentByID = () => {

  const students = useSelector(state => state.students)
  const dispatch = useDispatch()
    
  return (
    <>

    Click 'X' to Delete Student by ID

    <ul>
      {students.map((student, index) => {
        //eslint-disable-next line jsk-ally/anchor is valid
        return <li key={index}><a href = "#" onClick = {() => dispatch(deleteStudentByID(student.id))} style = {{color: "red"}}><b>X</b></a> 
        {student.fName}</li>
      })}

    </ul>
     
     
    </>
  )
}

export default DeleteStudentByID
