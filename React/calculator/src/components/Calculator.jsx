import React from 'react'
import ButtonRow from './ButtonRow'
import Display1 from './Display1'
const Calculator = () => {
  return (
    <> <div className="calculator-container">
    <div className="background-circle"></div>
    <div className="Calculator">
      <Display1 />
       <ButtonRow />
    </div>
</div></>
  )
}

export default Calculator