import React from 'react'
import Greetings from './Greetings'
const Profilecard = ({name,age,location}) => {
  return (
    <>
     <Greetings name={name}/> 
    <h1>age:{age}</h1>
    <h2>Location:{location}</h2>
    </>
  )
}

export default Profilecard;