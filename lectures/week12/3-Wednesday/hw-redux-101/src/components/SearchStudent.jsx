import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { searchStudent } from '../actions/students'

// search for a student by name, if nothing found, return empty array

const SearchStudent = () => {

  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState("")
  const searchResult = useSelector(state => state.searchResult)

  const handleSearchSubmit = e => {
    e.preventDefault()

    dispatch(searchStudent(searchName))

    setSearchName('')
  }
    
  return (
    <>
      <h1>Search Student</h1>

      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <br />

      <div style={{color: "teal"}}><i>{searchResult.fName}, {searchResult.city}</i></div>
      
    </>
  )
}

export default SearchStudent
