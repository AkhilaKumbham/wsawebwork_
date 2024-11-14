import React from 'react'
import { useState } from 'react';
import Profilecard from './Profilecard';
import InputForm from './InputForm';
const UserInput = () => {
    const [name,setName]=useState("");
    const handleChange=(event)=>{
    setName(event.target.value);
  setShowProfile(false);
};
const [showProfile,setShowProfile]=useState(false)
const [age,setAge]=useState("");
const handleChange1=(event)=>{
  setAge(event.target.value);

};
const handleButton=()=>{
    setShowProfile(true)
}
  return (
    <>
    <InputForm name={name} handleChange={handleChange}/>
    <InputForm name={age} handleChange={handleChange1}/>
       <button onClick={handleButton}>OK</button>
    {showProfile && <Profilecard name={name} age={age}/>}
    </>
  )
}

export default UserInput;