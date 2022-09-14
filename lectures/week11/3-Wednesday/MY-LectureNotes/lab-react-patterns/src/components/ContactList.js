import React from 'react'
import contactData from '../data/contact.js'
import Contact from './Contact'


const ContactList = () => {

  return (
    <>
      {contactData.map(contactObj =>{
        return <Contact key={contactObj.name} contactProp={contactObj}
      })}
    </>
  )
}

export default ContactList