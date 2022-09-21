import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {
  return (
    <>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/contacts'>Contacts</Link></li>
        <li><Link to = '/addcontact'>New Contact</Link></li>
      </ul>
    
      <br/>

      {props.children}

      <br/><br/>
      
    </>
  )
}

export default BaseLayout
