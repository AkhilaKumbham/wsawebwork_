import React from 'react'

const ClickButton = ({count,handleClick}) => {
  return (
    <>
<h1>You clicked th button {count} times</h1>
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default ClickButton