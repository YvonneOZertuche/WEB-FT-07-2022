import React from 'react'
import FriendList from './FriendList'

//!PRESENTATIONAL COMPONENT

const Friend = (friendProp) => {
  return (
    <>
      <li>{friendProp}</li>
    </>
  )
}

export default Friend