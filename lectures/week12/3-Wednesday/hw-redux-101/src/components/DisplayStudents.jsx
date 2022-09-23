import React from 'react'
import { useSelector } from 'react-redux'
import AddNewStudent from './AddNewStudent'
// import students from '../data/students'
// import AddStudents from './AddStudents'


const DisplayStudents = () => {

    //display the current students

  const studentList = useSelector(state => state.students)
  const count = useSelector(state => state.count)
  console.log(studentList)

      return (
        <>
        
          <h1>Students</h1>
          {/* <AddNewStudent /> */}

           <ul>
            {studentList.map(studentObj => {
              return (
                <li key={studentObj.id}>{studentObj.fName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {studentObj.city}
                &nbsp;&nbsp;
                </li>
              )
            })}
          </ul> 

        
         

        </>


  )
 
 
}


export default DisplayStudents
