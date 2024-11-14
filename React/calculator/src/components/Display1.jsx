import React from 'react'

const Display1 = () => {
  return (
    <>
      <div className="output-field-container">
            <input type="text" className="output-field" id="display" readonly/>
            <input type="text" className="input-field" placeholder="0" id="input-screen" readonly />
        </div>
    </>
  )
}

export default Display1