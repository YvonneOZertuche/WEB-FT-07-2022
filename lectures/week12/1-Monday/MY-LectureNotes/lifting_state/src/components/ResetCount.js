import React from 'react'

const ResetCount = ({ resetFunctionFromParent }) => {
  return (
    <>
      <button onClick={resetFunctionFromParent}>Reset</button>
    </>
  )
}

export default ResetCount
