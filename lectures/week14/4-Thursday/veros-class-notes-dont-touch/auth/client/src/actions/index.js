
import actionTypes from './actionTypes';
import axios from 'axios'  //this is like fetch

//{email, password}
// export const signUp = (formData) => {
    
//     return (dispatch)=>{

//     }
// }

export const signUp = formData => async dispatch=>{  // store.dispatch

    try{
        
        // api call to our backend

        let response = await axios.post('/register', formData)

        let jwt = response.data.token

        //take response from api call (jwt)
    
        //store token in global storage 

        dispatch({
            type: actionTypes.LOAD_USER_TOKEN, 
            data: jwt
        })

        //store token in local storage 

        localStorage.setItem('token', jwt)

    }
    catch(err){

        dispatch({
            type: actionTypes.ERROR, 
            data: err
        })

    }

    
}
