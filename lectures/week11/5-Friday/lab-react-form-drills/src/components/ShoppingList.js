import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DisplayShopping from './DisplayShopping'


//Primary Function
const ShoppingList = () => {     

  const [items, setItems] = useState([]) 
  const [inputValue, setInputValue] = useState('')

  //function, using the preventDefault() method, to prevent a browser reload/refresh on form submit
  const handleSubmit = (e) => {

    e.preventDefault()

  }
  //declaring variable for the useNavigate function
  const navigate = useNavigate()

  //declaring 'handleClick' function - navigates back to set path, in this case 'home', when button is clicked
  const handleClick = () => {
    navigate('/')
  }

  //function - Changes the name of Web browser tab
  useEffect(() => {
    document.title = 'Shopping List'
  })

  //function - Adds items to the list
  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
    }

    const shoppingList = [...items, newItem]
    {console.log(shoppingList)}
    setItems(shoppingList)
    setInputValue('')
  }

      return (
        <>
          <h1>Shopping List</h1>

          <form onSubmit={handleSubmit}>

            <h6>Add New Item:</h6>

            <input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
          
            <input type = "Submit" onClick={() => handleAddButtonClick()}/>
       
            <br />
            <br />
            <DisplayShopping shoppingList={items}/>

           

          </form>

        
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <button onClick={handleClick}>Home</button>
        </>

      )
      
}


export default ShoppingList
