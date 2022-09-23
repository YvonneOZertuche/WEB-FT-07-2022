import {combineReducers} from 'redux'
import authorsReducer from './authorsReducer'
import booksReducer from './booksReducer'

let rootReducer = combineReducers({

  auth: authorsReducer,
  book: booksReducer

})

export default rootReducer