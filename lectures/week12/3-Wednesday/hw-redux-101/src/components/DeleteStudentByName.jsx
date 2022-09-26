import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteStudentByName} from '../actions/students'
import DisplayStudents  from './DisplayStudents'


//delete student by name

const DeleteStudentByName = () => {

  const dispatch = useDispatch()
  const [fName, setFName] = useState("")

  const handleStudentSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteStudentByName(fName));
    setFName("");
  }

  return (
    <>
      <h1>Delete Student By Name</h1>

      <form onSubmit={handleStudentSubmit}>
        <input
          type='text'
          placeholder='Enter Student Name'
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />

        <input type='submit' />

      </form>

      <br></br>
      <br></br>
      <DisplayStudents />

    </>
  )
}

export default DeleteStudentByName



