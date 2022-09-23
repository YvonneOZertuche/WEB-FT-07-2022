import students from "../data/students"

const addStudents = ()=> {

  return {
    type: "ADD_STUDENTS",
    data: students,
    add: true
  }
}
 
const addNewStudent = (id, fName, city) => {
  // console.log(id,fName,city)
  return {
    type: "ADD_NEW_STUDENT",
    data: {
      id,
      fName,
      city
    }
  }
}

const deleteStudentById = (id) => {
  return {
    type: "DELETE_STUDENT_BY_ID",
    id
  }
}

const deleteStudentByName = (fName) => {
  return {
    type: "DELETE_STUDENT_NAME",
    fName
  }
}

const sortStudentsAlpha = () => {
  return{
    type:"SORT_STUDENTS_ALPHA"
  }
}

const sortStudentsCity = () => {
  return{
    type:"SORT_STUDENTS_CITY"
  }
}

const addStudentInOrder = () => {
  return{
    type:"ADD_STUDENT_IN_ORDER",
    data: {
      id,
      fName,
      city
    }
  }
}

const searchStudent = (name) => {
  return {
    type: "SEARCH_STUDENT",
    name
  }
}
export {
  addStudents,
  addNewStudent,
  deleteStudentById,
  deleteStudentByName,
  sortStudentsAlpha,
  sortStudentsCity,
  addStudentInOrder,
  searchStudent
}









