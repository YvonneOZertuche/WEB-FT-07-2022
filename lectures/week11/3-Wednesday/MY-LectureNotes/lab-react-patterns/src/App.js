import React from 'react'
import NameList from './components/NameList'
import FriendList from './components/FriendList'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <>
      <ContactList />
      <FriendList />
      <NameList />
    </>
  )
}

export default App
