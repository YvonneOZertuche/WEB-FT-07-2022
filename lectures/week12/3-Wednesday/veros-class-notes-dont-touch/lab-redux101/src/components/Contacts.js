import React from 'react'
import AddContact from './AddContact'
import {useSelector, useDispatch} from 'react-redux'
import {removeContact} from '../actions/contacts'

const Contacts = () => {

  const contactList = useSelector(state => state.contacts) 
  const dispatch = useDispatch()// store.dispatch(actionCreator)

  return (
    <>
      <h1>Contacts and Redux</h1>


      <AddContact />

      <ul>
        {contactList.map(contactObj =>{
           
        })}
      </ul>
      
    </>
  )
}

export default Contacts
