export const addStudents = (id, fName, city) => {

  return {
    type: "ADD_STUDENT",
    data: {
      id,
      fName,
      city
    }
  }
}

export const addNewStudent = (id, fName, city) => {
  console.log(id,fName,city)
  return {
    type: "ADD_NEW_STUDENT",
    data: {
      id,
      fName,
      city
    }
  }
}

export const deleteStudentById = (id) => {
  return {
    type: "DELETE_BY_ID",
    id
  }
}

export const deleteStudentByName = (fName) => {
  return {
    type: "DELETE_BY_NAME",
    fName
  }
}