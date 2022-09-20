import React from 'react'

const DecrementCount = ({decrementFunctionFromParent}) => {
  return (
    <>


    <button onClick={decrementFunctionFromParent}>Decrement</button>



    </>
  )
}



export default DecrementCount