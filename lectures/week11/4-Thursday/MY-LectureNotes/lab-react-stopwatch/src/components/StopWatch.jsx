import React, { useState, useEffect, useRef } from 'react'
import './styles.css'
//! useRef is setting a variable that is not going to change
const StopWatch = () => {
  const [running, setRunning] = useState(false)
  const [lapse, setLapse] = useState(0)
  let intervalRef = useRef(null)

  //! needed (component unmount) in case user closes the browser
  useEffect(() => {
    return () => {
      //?component didUnmount
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    //!component did mount, runs only one time
    console.log('runs after the component has mounted, once')
  }, [])

  useEffect(() => {
    //!component did mount, runs only one time, just if running is changed
    console.log(
      'runs after the component has mounted, once, just if running is changed'
    )
  }, [running])

  const handleRunClick = () => {
    if (running) {
      clearInterval(intervalRef.current)
    } else {
      let startTime = Date.now() - lapse
      intervalRef.current = setInterval(() => {
        setLapse(Date.now() - startTime)
      }, 0)
    }
    // running ? setRunning(false): setRunning(true)
    setRunning(!running)
  }

  const handleClearClick = () => {
    clearInterval(intervalRef.current)
    setLapse(0)
    setRunning(false)
  }
  return (
    <div>
      <label> {lapse}ms </label>
      <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleClearClick}>Clear</button>
    </div>
  )
}

export default StopWatch

