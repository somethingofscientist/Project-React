import React from 'react'
import { useState } from 'react'
import './Section.css'

const InputShortener = ({ setInputValue }) => {

  const [value, setValue] = useState("")

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className='inputContainer'>
      <h1>URL <span >Shortener</span></h1>
      <div>
        <input
          type='text'
          placeholder='Paste your long link here'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortener