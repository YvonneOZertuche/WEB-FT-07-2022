import {createSlice} from '@reduxjs/toolkit'

//define initial state 
const initialState = {count:23}


//This function holds both our reducer and actions
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //this is a key
  reducers: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count-- 
    },
    incrementByNum(state,action) {
      state.count = state.count + action.payload  //if we have a payload coming in it HAS to be called payload

    },   
    reset(state){
      state.count = 0
    }
  }

})


export const counterActions = counterSlice.actions

export default counterSlice.reducer