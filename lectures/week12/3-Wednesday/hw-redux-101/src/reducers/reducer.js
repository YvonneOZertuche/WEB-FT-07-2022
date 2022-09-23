//Need to ask if count=0 and students is an empty array, how do I update, once data was imported.
import students from '../data/students'

const reducer = (state, action) => {

  if(state === undefined){
    state = {
      count: 11,
      students: students
    }
  }

  switch(action.type) {
    case "INCREMENT": 
      return {
        ...state,
        count: state.count + action.data
      }

    case "DELETE_BY_ID": 
    console.log(action.data)
      return {
        ...state,
        students: state.students.id.concat(action.data)
      }

    case "ADD_NEW_STUDENT" : 
    console.log(action.data)
      return {
        ...state,
        students: state.students.concat(action.data)
      }


    default: 
      return state

  }


    
    
 









}

export default reducer