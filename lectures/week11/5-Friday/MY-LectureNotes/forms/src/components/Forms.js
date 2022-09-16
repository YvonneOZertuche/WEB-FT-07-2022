import React, {useState} from 'react'

const Forms = () => {

  const [textValue, setTextValue] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [selectValue, setSelectValue] = useState("Seattle")

  // const handleSubmit 


  return (
    <>

    <h2>{textValue}</h2>

    <form>
      <input type='text' value={textValue} onChange={e => setTextValue(e.target.value)} />

      <input type='checkbox' value={isValid} onChange={e => setIsValid(e.target.checked)} />

      <select value={selectValue} onChange={e => setSelectValue(e.target.value)} />

      {/* <option value="Houston">Houston</option>
              <option value="Atlanta">Atlanta</option>
              <option value="Seattle">Seattle</option>
              <option value="Chicago">Chicago</option>
              <option value="NewYork">New York</option>
              <option value="SanFrancisco">San Francisco</option> */}


    </form>



    </>
  )
}

export default Forms