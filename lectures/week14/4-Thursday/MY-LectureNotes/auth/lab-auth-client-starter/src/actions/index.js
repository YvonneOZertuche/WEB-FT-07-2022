
import actionTypes from './actionTypes';
import Axios from 'axios' //this is like fetch


// export const signUp = (formData) => {

//    return (dispatch )=> {

//       //api call to our backend 

//       //take response token in global storage 

//       //

//    }
// }


export const signUp = formData => async dispatch => {

   try {

      //api call to our backend
      let response = await Axios.post('/register', formData)
      
      let jwt = response.data.token

      dispatch({
         type: actionTypes.LOAD_USER_TOKEN,
         data: jwt
      })

      localStorage.setItem('token', jwt)
      
   } catch (error) {

      dispatch({
         type: actionTypes.ERROR,
         data: error
      })
      
   }
}
   
