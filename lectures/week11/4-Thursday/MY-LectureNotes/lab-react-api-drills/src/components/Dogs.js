//!Container Component

import React, {useState, useEffect} from 'react'
import Dog_presentational from './Dog_presentational'


const Dogs = () => {

  const [dogURL, setDogURL] = useState("")

  useEffect(() =>{
    getDog()

  }, [])

  const getDog = async () => {
    let result = await fetch('https://dog.ceo/api/breeds/image/random')

    let data = await result.json()

    setDogURL(data.message)
  }

  return (
    <>

    <Dog_presentational imageURL={dogURL}/>

    <br />

    <button onClick={getDog}>Get New Image</button>


      
    </>
  )
}

export default Dogs
