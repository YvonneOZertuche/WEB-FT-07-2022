import React from 'react'

const DisplayShopping = ({shoppingList}) => {

  return (
    <>

    {shoppingList.map(list => {

      return (
        <>
        
          
          <li>{list.itemName}</li>
          {console.log(shoppingList)}
          

        
      
        
        </>
      )

    })}

   </>

  )

}







export default DisplayShopping
