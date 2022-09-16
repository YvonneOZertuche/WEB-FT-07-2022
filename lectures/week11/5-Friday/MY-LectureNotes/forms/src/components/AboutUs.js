import React, {useEffect} from 'react'
import { useNavigate, useParams }from 'react-router-dom'

const AboutUs = () => {

  const navigate = useNavigate()

  const {aboutID} = useParams()

  useEffect(() => {

    document.title = "About Us"
  })

  const handleClick = () => {

    navigate('/')
  }
  return (
    <>

    <h1>About Us</h1>

    <h2>{aboutID}</h2>

    <button onClick={handleClick}>Go Home</button>
    </>
    

    
  )
}

export default AboutUs