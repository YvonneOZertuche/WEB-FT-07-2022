import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl'
import './App.css';

function App() {
  const[viewport, setViewport] = useState({})
  return (
    < >
      
       <ReactMapGL>

        markers here

       </ReactMapGL>
    </>
  );
}

export default App;
