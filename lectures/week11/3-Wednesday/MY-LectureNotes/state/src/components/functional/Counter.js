import React, {useState} from 'react'

//!This is a functional component

const Counter = () => {

  const [count, setCount] = useState(0) //*inside the () is where we put what we want useState to initially be

  return (
    <>

    <Counter />

    <h1>{count}</h1>

    <button onClick={() => setCount(count + 1)} >Increment</button>
    <button onClick={() => setCount(count - 1)} >Decrement</button>
    <button onClick={() => setCount(0)} >Reset</button>
   

    </>

    
  )
}

export default Counter







// Classes hold States and functions do not