import React from 'react'

const InputForm = ({name,handleChange}) => {
  return (
    <>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleChange}>
        </input>
        <input type="number" placeholder="Enter your age" value={age} onChange={handleChange1}/>  
    <br/>
    </>
  )
}

export default InputForm;