import React, { useState, useEffect } from 'react'
import MovieDetails from './MovieDetails'
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

const Movies = () => {
  const [movieURL, setMovieURL] = useState([])

      useEffect(() => {
        getMovie()
      }, [])

  const getMovie = async () => {
      let result = await fetch('http://www.omdbapi.com/?s=batman&apikey=6cf1fb6c')

      let data = await result.json()
      console.log(data.Search)
      setMovieURL(data.Search)
    }

  return (
      <>

        <MovieDetails moviesURL={movieURL} />

        {/* <Button variant="secondary" onClick={getMovie}>Movie Details</Button> */}

      </>
    )  
  
  }
   

export default Movies



  
          