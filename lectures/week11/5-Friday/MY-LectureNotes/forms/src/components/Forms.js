import React, {useState} from 'react'

const Forms = () => {

  const [textValue, setTextValue] = useState('what goes in here')
  const [isValid, setIsValid] = useState(false)
  const [selectValue, setSelectValue] = useState("New Braunfels")

  const handleSubmit = (e) => {
    
    e.preventDefault()

    //send data to database

    let dataObj = {
      textValue,
      isValid,
      selectValue
    }

    console.log('form was submitted', dataObj)

  }


  return (
    <>

    <h1> Forms</h1>
    
    {/* <h2>{textValue}</h2> */}

    <h2>{isValid ? "true" : "false"}</h2>

    <h2>{selectValue}</h2>

    <form onSubmit={handleSubmit}>
      <input type='text' value={textValue} onChange={e => setTextValue(e.target.value)} />

      <input type='checkbox' value={isValid} onChange={e => setIsValid(e.target.checked)} />

      <select value={selectValue} onChange={e => setSelectValue(e.target.value)} >

              <option value="New Braunfels">New Braunfels</option>
              <option value="Atlanta">Atlanta</option>
              <option value="Seattle">Seattle</option>
              <option value="Chicago">Chicago</option>
              <option value="NewYork">New York</option>
              <option value="SanFrancisco">San Francisco</option>
      </select>

      <input type = "submit" />

    </form>       

    </>
  )
}

export default Forms