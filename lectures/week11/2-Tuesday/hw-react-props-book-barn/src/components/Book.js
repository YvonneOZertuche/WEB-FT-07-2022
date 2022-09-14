import React from 'react'
import Welcome from './Welcome'
import Books from './Books'
import bookData from '../data/bookData'

// https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/
const Book = ({bookProp}) => {
  return (
    <>

    <img src={"https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + bookProp.imageLink} alt="" />
    <Welcome />
    </>
  )
}

export default Book