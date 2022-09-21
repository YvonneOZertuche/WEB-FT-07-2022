import React, {useState, useEffect} from 'react'
import AddContact from './AddContact'
import { v4 as uuidv4} from 'uuid'

const Contacts = () => {

  const [contacts, setContacts] = useState([])

  console.log(contacts)

  useEffect(() => {
    setContacts([

      {
        id: uuidv4(),
        name: 'Yvonne',
        phonenumber: '111-222-3333',
        email: 'yvonne@email.com',
        city: 'New Braunfels',
        state: 'Texas',
        zip: '12345'
      }
     
    ])

  },[])

    const handleAddContact = (newContactObj) => {

      setContacts([newContactObj,...contacts]) //placing new contact at the top of the list
    } 

    const handleRemoveContact = (id) => {
      let filteredContacts = contacts.filter(contact=>{

        return id !== contact.id
      })

      setContacts(filteredContacts)
    }
  return (

    <>

      <h1>Contact List</h1>

      <Contacts contactsPropsArray={contacts} deleteContact={id=>handleRemoveContact(id)} />

      <AddContact addContactProp={contact=>handleAddContact(contact)} />
    
    </>
  )
}

export default Contacts