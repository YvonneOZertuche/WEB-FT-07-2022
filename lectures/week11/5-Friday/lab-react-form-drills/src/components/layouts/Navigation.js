import React from 'react'
import { Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar'



const Navigation = () => {
  return (
    <>
       {/* <Container> */}
          {/* <Navbar fixed = 'top' bg='info' variant='dark'> */}
            <ul>
              <li> <Link to = '/'>Home Page</Link></li>
              <li> <Link to = '/shopping'>Shopping List</Link></li>
              <li> <Link to = '/addressbook'>Address Book</Link></li>
              <li> <Link to = '/colorpicker'>Color Picker</Link></li>
            </ul>
          {/* </Navbar> */}
        {/* </Container> */}
   </> 
  )
}

export default Navigation