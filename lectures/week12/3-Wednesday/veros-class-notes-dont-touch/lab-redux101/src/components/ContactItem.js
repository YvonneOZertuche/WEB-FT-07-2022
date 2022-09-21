import React from 'react'

const ContactItem = () => {
  return (
    

    <li key={contactObj.id}>{contactObj.firstName} {contactObj.city}

    &nbsp;&nbsp;
    <a href="#" onClick={()=>dispatch(removeContact(contactObj.id))}>X</a>
    </li>
    
  )
}

export default ContactItem