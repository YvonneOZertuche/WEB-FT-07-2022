import React from 'react'
import { useSelector } from 'react-redux'



// import students from '../actions/students'

const AddStudents = () => {

    // const studentList = useSelector(state => state.students)
    const count = useSelector(state => state.count)

    // add the list of students from data/students to the global state
    // show the current student count

    
  return (
    <>
       
        {/* <ul>
          {studentList.map(studentsObj  =>{

          })}
        </ul> */}

          
          <h3>Current Student Count: {count}</h3> 
       

     
      {/* <button>Add Students</button> */}
    </>
  )
}

export default AddStudents
