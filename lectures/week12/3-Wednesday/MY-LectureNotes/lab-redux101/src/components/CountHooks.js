import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import incrementCount from '../actions/incrementCount'


const CountHooks = () => {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <>

      Count Hooks
      <h2>{count}</h2>

      <button onClick={()=> dispatch(incrementCount(3))}>Increment</button>
     

    </>
  )
}

export default CountHooks
