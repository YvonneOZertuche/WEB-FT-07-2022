import React from 'react'
import { useSelector } from 'react-redux'
import students from '../data/students'

//display the current students

const DisplayStudents = () => {

  const students = useSelector(state => state.students)
  const count = useSelector(state => state.count)
  console.log(students)

      return (
        <>
        
          <h1>Students</h1>

           <ul>
            {students.map((students, index) => {
              return 
                <li key={index}>{students.fName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {students.city}
                &nbsp;&nbsp;
                </li>
            })}
          </ul> 

        <h2>Current Student Count: {count}</h2>
        
         

        </>


  )
 
 
}


export default DisplayStudents
