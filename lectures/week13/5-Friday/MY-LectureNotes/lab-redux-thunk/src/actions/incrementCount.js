
import {INCREMENT, DECREMENT, INCREMENT_BY_NUM, RESET,
    LOAD_API_DATA, LOAD_DATA} from './types'
import data from  '../assets/data'


// https://jsonplaceholder.typicode.com/comments

export const loadData = () => {

    return async (dispatch)=>{ 

        try {

            dispatch({type: LOAD_DATA, payload: data})

            let results = await fetch('https://jsonplaceholder.typicode.com/comments')
            let apiData = await results.json()

            dispatch({type: LOAD_API_DATA, payload:apiData})

        } catch (error) {


            
        }


    }
}



export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    
    return {
        type: DECREMENT
    }
}

export const incrementByNum = (num) => {
    
    return {
        type: INCREMENT_BY_NUM, 
        data: num
    }
}

export const reset = () => {
    
    return {
        type: RESET
    }
}



