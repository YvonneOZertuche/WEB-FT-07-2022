import React, {useEffect} from 'react'
import './App.css';


function App() {

    useEffect(() => {
      document.title = 'Home'
    }, [])

  return (
    <>
      
      <h1>Home Page</h1>

    </>
  )
}

export default App;
