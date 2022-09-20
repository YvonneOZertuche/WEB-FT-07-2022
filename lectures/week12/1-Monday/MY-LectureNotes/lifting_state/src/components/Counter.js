import React, {useEffect, useState} from 'react'
import DisplayCount from './DisplayCount'
import IncrementCount from './IncrementCount'
import DecrementCount from './DecrementCount'
import ResetCount from './ResetCount'


const Counter = () => {

  const [count, setCount] = useState(0)


  useEffect(() => {
    document.title = 'Counter'
  }, [])

  return (
    <>
    
    <h1>Counter</h1>

    {count}

    <DisplayCount countProp={count}/>
 
    {/* <IncrementCount incrementFunctionFromParent={handleIncrement}/> */}
    <IncrementCount incrementFunctionFromParent={()=> setCount(count + 1)}/>
    <br />
    <br />
    <DecrementCount decrementFunctionFromParent={()=> setCount(count - 1)}/>
    <br />
    <br />
    <ResetCount resetFunctionFromParent={()=> setCount(0)}/>
    <br />
    
    </>
  )
}

export default Counter