
import React from 'react'
import Navigation from './Navigation'


const BaseLayout = (props) => {
  return (
    <>

    <Navigation />
    
    {props.children}

    <br />

    <br /> 

    Footer information
    </>
  )
}

export default BaseLayout