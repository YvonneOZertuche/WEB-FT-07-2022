import React, {useEffect} from 'react'
import Forms from './components/Forms'


const App = () => {
  
  useEffect(() => {
  document.title = 'Home'
})

  return (
    <>
    
    <Forms />

    {/* <h1>Home Page</h1> */}
    </>

  )  

}

export default App;
