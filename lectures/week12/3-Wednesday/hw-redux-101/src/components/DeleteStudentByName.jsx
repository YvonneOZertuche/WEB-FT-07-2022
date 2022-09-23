import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteStudentByName} from '../actions/students'
import DisplayStudents  from './DisplayStudents'


//delete student by name

const DeleteStudentByName = () => {

  const dispatch = useDispatch()
  const [fName, setfName] = useState("")

  const handleStudentSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteStudentByName(fName));
    setfName("");
  }
  return (
    <>
      <h1>Delete Student By Name</h1>

      <form onSubmit={handleStudentSubmit}>
        <input
          type='text'
          placeholder='Enter Student Name'
          value={fName}
          onChange={e => setfName(e.target.value)}
        />

        <input type='submit' />

      </form>

    </>
  )
}

export default DeleteStudentByName



