import React from 'react'
import Days from './Days'
import DropDown from './DropDown'

const Name = ({name, days, language}) => {

return(
  <>

  {name}

  <Days days={days} />

  <DropDown days={days} language={language}/>

  </>
)

}

 

export default Name

