import React from 'react'
import Friend from './Friend'

//!container component handles data


const FriendList = () => {

    const friends = [
        'Bob',
        'Linda',
        'Tina',
        'Louise',
        'Gene',
      ]

     
  return (
    <>
     <ul>
        {friends.map(friendStr => {

          return <Friend friendProp={friendStr} />

        })}
        
     </ul>
    </>
  )
}

export default FriendList